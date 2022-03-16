type PerfumeList = {
	perfumes: [];
};

type Perfume = {
	perfume_id: number;
	perfume_name: string;
	brand_name: string;
	image: string;
};

function PerfumeList({ perfumes }: PerfumeList) {
	return (
		<ul>
			{perfumes.map((perfume: Perfume, idx: number) => (
				<li key={idx}>
					<div>
						<img src={perfume.image} alt="perfume image" />
						<button>🤍</button>
					</div>
					<p>{perfume.perfume_name}</p>
				</li>
			))}
		</ul>
	);
}

export default PerfumeList;
