import { atomLinkList } from "@/store/atomLinkList";
import { getItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";


export const RecoilPersist = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const setList = useSetRecoilState(atomLinkList);

  const loadData = async () => {
    const data = await getItem('MAIN/LINK_LIST')

    if (data !== null && data !== undefined) {
      setList(data as any)
    }

    setIsLoaded(true)
  }

  useEffect(() => {
    if (isLoaded) return

    loadData()
  })

  return <>{children}</>
}
