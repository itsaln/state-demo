import { Catalog } from '@/components/catalog/Catalog'
import { Filter } from '@/components/filter/Filter'
import { TypeEnum, DirectionEnum } from '@/components/filter/constants'

export default function Home({
	searchParams
}: {
	searchParams: { type: string; dir: string }
}) {
	function convertToType(str: string | null): TypeEnum | null {
		if (Object.values(TypeEnum).includes(str as TypeEnum)) {
			return str as TypeEnum
		}
		return null
	}

	function convertToDir(str: string | null): DirectionEnum | null {
		if (Object.values(DirectionEnum).includes(str as DirectionEnum)) {
			return str as DirectionEnum
		}
		return null
	}

	return (
		<div className='tw-flex tw-flex-col tw-justify-center tw-w-[600px] tw-h-screen tw-py-[40px] tw-mx-auto'>
			<Filter
				courseType={convertToType(searchParams.type) ?? TypeEnum.COURSE}
				courseDirection={
					convertToDir(searchParams.dir) ?? DirectionEnum.FRONTEND
				}
			/>

			<Catalog
				courseType={convertToType(searchParams.type) ?? TypeEnum.COURSE}
				courseDirection={
					convertToDir(searchParams.dir) ?? DirectionEnum.FRONTEND
				}
			/>
		</div>
	)
}
