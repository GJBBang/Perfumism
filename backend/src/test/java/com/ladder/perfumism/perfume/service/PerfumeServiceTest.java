package com.ladder.perfumism.perfume.service;

import static com.ladder.perfumism.perfume.util.BrandFixture.BRAND_ID;
import static com.ladder.perfumism.perfume.util.BrandFixture.BRAND_NAME;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.PERFUME_ID;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.PERFUME_NAME;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.IMAGE;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.LAUNCH_YEAR;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.AVERAGE_GRADE;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.TOP_NOTES;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.MIDDLE_NOTES;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.BASE_NOTES;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.TOTAL_SURVEY;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.LONGEVITY;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.SILLAGE;
import static com.ladder.perfumism.perfume.util.PerfumeFixture.createPerfume;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.ladder.perfumism.global.exception.BusinessException;
import com.ladder.perfumism.global.exception.ErrorCode;
import com.ladder.perfumism.perfume.controller.dto.response.PerfumeDetailResponse;
import com.ladder.perfumism.perfume.domain.Brand;
import com.ladder.perfumism.perfume.domain.BrandRepository;
import com.ladder.perfumism.perfume.domain.Perfume;
import com.ladder.perfumism.perfume.domain.PerfumeAccordRepository;
import com.ladder.perfumism.perfume.domain.PerfumeRepository;
import com.ladder.perfumism.perfume.domain.SimilarPerfumeRepository;
import com.ladder.perfumism.perfume.util.BrandFixture;
import java.util.Optional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class PerfumeServiceTest {

    // Mock ??? ???????????? ?????? ????????? ????????? ????????????.
    // ????????? ????????? Mock ??? ?????? ???????????? Repository ?????? ???????????? ??????.
    @Mock
    private PerfumeRepository perfumeRepository;

    @Mock
    private BrandRepository brandRepository;

    @Mock
    private PerfumeAccordRepository perfumeAccordRepository;

    @Mock
    private SimilarPerfumeRepository similarPerfumeRepository;

    @InjectMocks
    private PerfumeService perfumeService;

    // ?????? ????????? ???????????? ?????? ??? ?????? ????????????.
    // ???????????? BeforeEach ??? ??????.
    // ?????? ????????? ???????????? ????????? ?????? ????????????
    // BeforeAll ??? AfterAll ??? ?????????
    // static ?????? ???????????? ?????? ????????????.
    @AfterEach
    void cleanup() {
        perfumeRepository.deleteAll();
        brandRepository.deleteAll();
        perfumeAccordRepository.deleteAll();
        similarPerfumeRepository.deleteAll();
    }

    @Test
    @DisplayName("???????????? ?????? ID??? ????????? ??? ??????.")
    void perfumeRead() {
        //given
        Brand brand = BrandFixture.createBrand(BRAND_ID, BRAND_NAME);
        Perfume perfume = createPerfume(PERFUME_ID, PERFUME_NAME, brand, IMAGE, LAUNCH_YEAR, AVERAGE_GRADE, TOP_NOTES,
            MIDDLE_NOTES, BASE_NOTES, TOTAL_SURVEY, LONGEVITY, SILLAGE);

        when(perfumeRepository.findById(any())).thenReturn(Optional.ofNullable(perfume));

        //when
        PerfumeDetailResponse perfumeDetailResponse = perfumeService.viewDetailPerfume(1L);

        //then
        Assertions.assertThat(perfumeDetailResponse.getName()).isEqualTo(PERFUME_NAME);
    }

    @Test
    @DisplayName("???????????? ?????? ?????? ID??? ???????????? ErrorCode S01??? ????????????.")
    void notExistPerfumeId() {
        when(perfumeRepository.findById(any())).thenThrow(new BusinessException(ErrorCode.PERFUME_NOT_FOUND_BY_ID));

        // when & then
        Assertions.assertThatExceptionOfType(BusinessException.class)
            .isThrownBy(() -> perfumeService.viewDetailPerfume(PERFUME_ID))
            .withMessageMatching(ErrorCode.PERFUME_NOT_FOUND_BY_ID.getMessage());
    }
}
