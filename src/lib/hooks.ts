import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/lib/types";

export function useSectionInView(sectionName:SectionName, threshold = 0.75){

  const {ref, inView}=useInView({
    threshold
  });
  const { setActiveSection, lastTimeClicked} = useActiveSectionContext();
  useEffect(()=>{
    if (inView && Date.now()-lastTimeClicked > 1000) {
      setActiveSection(sectionName);
    }
  },[inView, setActiveSection, lastTimeClicked, sectionName]);
  return{
    ref,
  }
}