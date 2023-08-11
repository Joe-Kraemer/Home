import{useInView} from "react-intersection-observer"


const Projects = ({setVisibleSection,headerRef}) =>{
    const{ref} = useInView({
        threshold: 0.5,
        onChange: (inView, entry)=>{
            if(inView){
                setVisibleSection(entry.target.id)
            }
        }
    })
    return(
        <section id="Projects" ref={ref}>
            <div>heading here</div>
            <article>content here</article>
        </section>
    )
}
export default Projects