import { useEffect, useRef, useState } from "react"
import lessonRubric from './assets/Secondary Math Lesson Plan Rubric.docx.pdf'
import cstp from './assets/Secondary Math Lesson Plan Rubric.docx.pdf'
import mesaEthics from'./assets/MESA Ethics - Presentation.pdf'
import notebookLM from'./assets/NotebookLM screenshot.pdf'
import oneNoteWriteUp from'./assets/CPM3  9.1.6.docx.pdf'
import { Button } from "./components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"



export default function App() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            '*'
          )
        }
      },
      { threshold: 0.5 }
    )

    const current = videoRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  // const artifactImages = [
  //   {
  //     src: "https://i.imgur.com/oSaJWVH.jpeg",
  //     alt: "Student Work Example 1",
  //     caption: "Student work showing application of logarithmic rules.",
  //   },
  //   {
  //     src: "https://i.imgur.com/QqPw1lg.jpeg",
  //     alt: "Student Work Example 2",
  //     caption: "Student work showing application of logarithmic rules.",
  //   },
  // ];

  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "cstp", label: "CSTP Growth and Development" },
    { id: "artifacts", label: "Developing as a Professional Educator" },
    { id: "reflections", label: "Contributing to the Profession" },
  ];

  return (
      <div className="text-foreground font-mono transition-colors duration-500 ease-in-out min-h-screen w-full flex flex-col items-center">
      <header
        className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 z-50"
      >
        <nav className="w-full max-w-4xl mx-auto flex flex-col items-center p-4 text-center text-black">
          <div className="w-full flex justify-center items-center md:hidden">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black"
              >
                ☰
              </Button>
            </div>
          </div>

          <div className={`flex-col items-center space-y-2 mt-4 ${menuOpen ? "flex" : "hidden"} md:hidden w-full`}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                asChild
                className="w-full justify-center text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </Button>
            ))}
          </div>

          <ul className="hidden md:flex w-full items-center justify-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  asChild
                  className="h-auto justify-center px-2 py-2 text-center leading-tight transition-shadow duration-300 hover:shadow-md hover:shadow-black"
                >
                  <a href={`#${item.id}`}>{item.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20 snap-y snap-mandatory overflow-y-auto w-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          <section
            id="introduction"
            className="snap-start scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-10 flex flex-col items-center justify-center gap-6 text-center bg-white dark:bg-zinc-900"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091870622-1e7e6a5eab48')" }}
          >
            <div className="w-full max-w-3xl flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold mb-3">Introduction</h1>
              <p className="mb-6 max-w-xl">
                Hello my name is DeAndre Minor. I am a high school mathematics educator committed to building student-centered learning 
                environments rooted in equity, academic rigor, and college readiness. My classroom blends mathematical
                logic, real-world applications, and creativity to help students grow into capable, confident thinkers. I teach MESA and 
                Integrated math 3 honors, which is a mix of Geometry and Algebra II with a sprinkles of Pre-Calculus built in. The class is predominantly 
                juniors, however I do also have sophmores and seniors.
              </p>
              {/* <p className="max-w-xl">(A space for profile photo will be included here.)</p> */}
              <img
                src="https://i.imgur.com/7yzWdOi.jpeg"
                alt="DeAndre Minor"
                className="rounded-full w-48 h-48 object-cover mt-4"
              />
            </div>
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                ref={videoRef}
                className="w-full h-full rounded-md shadow-lg"
                src="https://www.youtube.com/embed/mUV6g_eAFz8?enablejsapi=1"
                title="Why I Teach"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          <section id="cstp" className="snap-start scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">CSTP growth and Development</h2>
            <Carousel className="w-full max-w-4xl">
              <div className="overflow-hidden touch-pan-y">
                <CarouselContent>
                  {/* Image CarouselItems, scrollable image only */}
                  {/* {artifactImages.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full h-[min(60vh,600px)] min-h-[320px] overflow-y-auto touch-pan-y">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full max-h-[1000px] object-contain rounded-md"
                        />
                      </div>
                      <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground font-black">
                        {item.caption}
                      </p>
                    </CarouselItem>
                  ))} */}
                  {/* PDF CarouselItems */}
                  <CarouselItem>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={cstp} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      Explanations for CSTP performances.
                    </p>
                  </CarouselItem>
                </CarouselContent>
              </div>
              <CarouselPrevious className='text-black'/>
              <CarouselNext className='text-black'/>
            </Carousel>
          </section>

          <section id="artifacts" className="snap-start scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">Developing as a Professional Educator</h2>
            <div className="w-full max-w-4xl text-left">
              <div className="overflow-hidden touch-pan-y">

                    <h3 className="text-l font-semibold mb-6 text-center">Professional Goal</h3>
                    
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      One of my biggest professional goals is continuing to strengthen student communication and ownership
                       within mathematics and project-based learning environments. I want students to move beyond simply 
                       finding answers and instead confidently explain, justify, and apply their thinking both verbally and 
                       in writing. I also want to continue refining how I use assessment data, collaborative structures, and 
                       academic language supports to make instruction more responsive and accessible for all learners.
                    </p>
                    <br />
                    <h3 className="text-l font-semibold mb-6 text-center">Actions to Meet My Goal</h3>
                    
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      To achieve this goal, I plan to continue designing lessons that prioritize discourse, collaboration, 
                      and productive struggle. I will use student assessment data, exit tickets, and classroom discussions 
                      to identify misconceptions and adjust instruction in real time. I also plan to collaborate with 
                      instructional coaches and colleagues to refine questioning strategies, group structures, and talk 
                      moves that encourage deeper student thinking. I will know I am making progress when students are 
                      able to independently explain their reasoning, engage in meaningful discussions, and demonstrate 
                      stronger conceptual understanding across assessments and classroom activities.
                    </p>
                    <br />
                    <h3 className="text-l font-semibold mb-6 text-center">How I Will Remain a Connected Educator</h3>
                    
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      I will remain connected as an educator by continuing to seek out opportunities for growth, 
                      collaboration, and reflection. Professional development, coaching conversations, and 
                      collaboration with colleagues provide valuable perspectives that help improve my teaching 
                      practice. I also want to continue exploring technology tools, engineering-based learning, 
                      and project-based instruction that make learning more engaging and relevant for students. 
                      Remaining open to feedback and adapting to student needs will help me continue growing 
                      throughout my career.
                    </p>
                    <br />
                    <h3 className="text-l font-semibold mb-6 text-center">My Advice to New Teachers</h3>
                    
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-md text-muted-foreground">
                      Give yourself permission to grow over time. Strong teaching does not happen overnight, and some 
                      of the best learning experiences come from reflecting on lessons that did not go perfectly. Focus 
                      on building relationships with students first, because students are more willing to take academic 
                      risks when they feel supported and respected.
                      <br />
                      Stay organized and protect your energy whenever possible. Teaching can easily become overwhelming 
                      if you try to do everything at once, so focus on consistency instead of perfection. Find systems 
                      that help you manage planning, grading, and communication efficiently, and make time outside of 
                      school to recharge mentally and physically.
                      <br />
                      Finally, never lose sight of why you started teaching in the first place. There will be difficult 
                      days, but there will also be moments where students surprise you with their growth, confidence, 
                      and resilience. Those moments make the work meaningful, and they are often the moments students 
                      remember for years after leaving your classroom.
                    </p>
              </div>
            </div>
          </section>
          <section id="reflections" className="snap-start scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
            <h2 className="text-xl font-semibold mb-6">Contributing to the Profession</h2>
            <div className="w-full max-w-4xl text-left">
              <Carousel className="w-full">
              <div className="overflow-hidden touch-pan-y">
                <CarouselContent>
                  {/* PDF CarouselItems */}
                  <CarouselItem>
                    <h3 className="text-l font-semibold mb-6 text-center">Lesson Plan Rubric</h3>
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      This is a rubric that I created that sets up expectations for effective secondary math lesson planning.
                      It focuses on the purpose of the activity, criteria as well as questions. It is flexible enough to add 
                      things in or take things out without being too cumbersome and still maintaning a high level of rigor. 
                    </p>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={lessonRubric} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <h3 className="text-l font-semibold mb-6 text-center">OneNote</h3>
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                      OneNote has been one of my most useful organizational tools for lesson planning,
                       coaching notes, induction reflections, and classroom resources. I use it to 
                       quickly organize instructional ideas, observation feedback, assessment data, 
                       and lesson adjustments in one place. It has helped streamline planning and 
                       reflection, especially when balancing multiple courses and long-term projects. Using
                       this application works best with a stylus however, it can be utilized without one as 
                       well.
                    </p>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={oneNoteWriteUp} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <h3 className="text-l font-semibold mb-6 text-center">Canva</h3>
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                     I regularly use Canva to create slide decks, student-facing handouts, project visuals, and 
                     collaborative activities for both my IM3 Honors and MESA classes. Canva has helped me make 
                     lessons more visually engaging and easier for students to follow, especially during project-based 
                     learning and engineering design activities. I plan to continue using it because it allows students 
                     to present ideas creatively while also supporting organization and accessibility for visual learners.
                    </p>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={mesaEthics} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <h3 className="text-l font-semibold mb-6 text-center"> NotebookLM</h3>
                    <p className="mx-auto mt-4 max-w-3xl text-center font-black text-sm text-muted-foreground">
                     NotebookLM has become a valuable tool for organizing information, summarizing resources, and 
                     supporting lesson preparation. I use it to upload readings, lesson materials, and instructional 
                     documents so I can quickly generate summaries, guiding questions, and key ideas for instruction. 
                     It has been especially helpful when preparing review materials, analyzing complex texts, or organizing 
                     ideas across multiple classes and projects. Teaching multiple topics while controlling the information that is 
                     being used to help develop lessons and ideas makes creating new curriculum much easier than contantly looking through
                     already sourced material piece by piece. I am excited to continue using NotebookLM because it saves 
                     planning time while helping create more organized and accessible learning materials for students.
                    </p>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={notebookLM} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </div>
              <CarouselPrevious className='text-black'/>
              <CarouselNext className='text-black'/>
            </Carousel>
            </div>
          </section>

        </div>
      </main>

      <footer className="w-full text-center p-4 text-sm text-gray-500">
        <p>Email: dminor@laalliance.org</p>
        <p>&copy; {new Date().getFullYear()} DeAndre Minor. All rights reserved.</p>
      </footer>
    </div>
  )
}
