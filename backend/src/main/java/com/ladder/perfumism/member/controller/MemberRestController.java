package com.ladder.perfumism.member.controller;

import com.ladder.perfumism.member.controller.dto.request.CheckDuplicateRequest;
import com.ladder.perfumism.member.controller.dto.request.FindPasswordRequest;
import com.ladder.perfumism.member.controller.dto.request.MemberSaveRequest;
import com.ladder.perfumism.member.controller.dto.response.CheckDuplicateResponse;
import com.ladder.perfumism.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.net.URI;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Api(tags = {"회원"})
public class MemberRestController {

    private final MemberService memberService;

    public MemberRestController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/members/join")
    @ApiOperation(value = "회원가입", notes = "회원 가입 api")
    public ResponseEntity<Void> join(@RequestBody MemberSaveRequest request) {
        Long joinMemberId = memberService.saveMember(request);
        URI uri = URI.create("/api/members/" + joinMemberId);
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/members")
    @ApiOperation(value = "회원탈퇴", notes = "회원 탈퇴 api")
    public ResponseEntity<Void> resignMember(@AuthenticationPrincipal String email) {
        memberService.resignMember(email);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/members/find-pw")
    public ResponseEntity<Void> findPassword(@RequestBody FindPasswordRequest request) {
        memberService.findPassword(request);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/members/exist-email")
    @ApiOperation(value = "이메일 중복검사", notes = "이메일 중복 검사 api")
    public ResponseEntity<CheckDuplicateResponse> checkDuplicateEmail(@RequestBody CheckDuplicateRequest request) {
        return ResponseEntity.ok().body(memberService.checkDuplicateEmail(request));
    }

    @PostMapping("/members/exist-username")
    @ApiOperation(value = "유저네임 중복검사", notes = "유저네임 중복 검사 api")
    public ResponseEntity<CheckDuplicateResponse> checkDulicateUsername(@RequestBody CheckDuplicateRequest request) {
        return ResponseEntity.ok().body(memberService.checkDuplicateUsername(request));
    }
}
