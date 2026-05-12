import { useEffect, useRef, useState } from "react"
import lessonRubric from './assets/Secondary Math Lesson Plan Rubric.docx.pdf'
import cstp1 from './assets/CSTP1.png'
import cstp2 from './assets/CSTP2.png'
import cstp3 from './assets/CSTP3.png'
import cstp4 from './assets/CSTP4.png'
import cstp5 from './assets/CSTP5.png'
import cstp6 from './assets/CSTP6.png'
import cstpo from './assets/CSTPOverall.png'
import mesaEthics from'./assets/MESA Ethics - Presentation.pdf'
import notebookLM from'./assets/NotebookLM screenshot.pdf'
import oneNoteWriteUp from'./assets/CPM3  9.1.6.docx.pdf'
import { Button } from "./components/ui/button"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"



export default function App() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCstpCard, setActiveCstpCard] = useState(0);
  const [contributionApi, setContributionApi] = useState<CarouselApi>();
  const [activeContributionSlide, setActiveContributionSlide] = useState(0);

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

  useEffect(() => {
    if (!contributionApi) return

    const updateContributionSlide = () => {
      setActiveContributionSlide(contributionApi.selectedScrollSnap())
    }

    updateContributionSlide()
    contributionApi.on("select", updateContributionSlide)
    contributionApi.on("reInit", updateContributionSlide)

    return () => {
      contributionApi.off("select", updateContributionSlide)
      contributionApi.off("reInit", updateContributionSlide)
    }
  }, [contributionApi])

  const cstpCards = [
    {
      title: "CSTP Overall Growth",
      image: cstpo,
      alt: "CSTP Reflection 6",
      text: "Overall, my CSTP results demonstrate meaningful professional growth across all areas of teaching practice throughout induction. I have become more intentional in using student data, fostering academic discourse, designing equitable learning experiences, and reflecting on instructional decisions. At the same time, I recognize that there is still room to grow in strengthening student ownership, increasing independent academic communication, and refining responsive instructional practices. My next steps are to continue building systems that empower students to think critically, communicate confidently, and take a more active role in their learning.",
    },
    {
      title: "CSTP 1: Engaging and Supporting All Students in Learning",
      image: cstp1,
      alt: "CSTP Reflection 1",
      text: "My results in CSTP 1 show growth in designing student-centered and culturally responsive learning experiences that increase participation and engagement. Throughout induction, I became more intentional about incorporating student interests, backgrounds, and voice into instruction. However, I still want to grow in creating even more opportunities for students to independently take ownership of discussions, learning choices, and collaborative problem solving. My next steps are to continue strengthening discourse routines, student reflection opportunities, and structures that promote student agency and equitable participation.",
    },
    {
      title: "CSTP 2: Creating and Maintaining Effective Environments",
      image: cstp2,
      alt: "CSTP Reflection 2",
      text: "My CSTP 2 results reflect growth in building a classroom culture that is safe, collaborative, and academically focused. I improved in using restorative and relationship-based practices to support student behavior and classroom management while creating structures that encourage productive collaboration. One area I still want to strengthen is increasing student accountability for maintaining classroom norms and supporting one another during learning. Moving forward, I plan to continue refining collaborative expectations and giving students more responsibility in shaping classroom culture.",
    },
    {
      title: "CSTP 3: Understanding and Organizing Subject Matter",
      image: cstp3,
      alt: "CSTP Reflection 3",
      text: "My growth in CSTP 3 is reflected in my ability to connect mathematical concepts to real-world applications and interdisciplinary learning experiences. I became more effective at designing lessons that encourage critical thinking, collaboration, and deeper conceptual understanding. I would still like to improve how consistently students independently make connections across content areas and apply learning in unfamiliar contexts. My next steps include continuing to design project-based and problem-solving activities that require students to think critically and apply concepts beyond procedural practice.",
    },
    {
      title: "CSTP 4: Planning Instruction and Designing Learning Experiences",
      image: cstp4,
      alt: "CSTP Reflection 4",
      text: "CSTP 4 represents one of my strongest areas of growth during induction. I improved in using student assessment data, responsive instructional strategies, and differentiated supports to adjust instruction in real time based on student needs. While I have grown in planning engaging and responsive lessons, I still want to strengthen how efficiently I adapt instruction during lessons when misconceptions emerge. My next steps are to continue refining checks for understanding, flexible grouping, and targeted intervention strategies that support all learners during instruction.",
    },
    {
      title: "CSTP 5: Assessing Students for Learning",
      image: cstp5,
      alt: "CSTP Reflection 5",
      text: "My CSTP 5 results show growth in using assessment practices to monitor progress and inform instruction. I became more intentional about analyzing assessment data, involving students in self-assessment, and using equitable grading and reassessment opportunities to support growth. An area I still want to improve is helping students more consistently interpret their own data and use it to set meaningful learning goals independently. Moving forward, I plan to increase opportunities for student reflection, goal setting, and data discussions to strengthen student ownership of learning.",
    },
    {
      title: "CSTP 6: Developing as a Professional Educator",
      image: cstp6,
      alt: "CSTP Reflection 6",
      text: "My results in CSTP 6 reflect strong growth in reflection, collaboration, professionalism, and commitment to continuous improvement. During induction, I consistently sought feedback from coaches and colleagues, reflected on instructional practices, and adjusted instruction to better support student learning and equity. While I have grown significantly as a reflective educator, I want to continue developing leadership skills and contributing more actively to professional learning communities. My next steps include continuing collaboration with colleagues, participating in professional development, and sharing successful instructional practices with others.",
    },
  ];

  const activeCstp = cstpCards[activeCstpCard];

  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "cstp", label: "CSTP Growth and Development" },
    { id: "artifacts", label: "Developing as a Professional Educator" },
    { id: "reflections", label: "Contributing to the Profession" },
  ];

  const contributionSlides = ["NotebookLM", "Lesson Plan Rubric", "OneNote", "Canva"];

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

      <main className="pt-20 w-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-5xl mx-auto space-y-16">
          <section
            id="introduction"
            className="scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-10 flex flex-col items-center justify-center gap-6 text-center bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800"
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

          <section id="cstp" className="scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-3">CSTP Growth and Development</h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Select a card to review each CSTP reflection and the image connected to that area of growth.
            </p>
              <div className="w-full max-w-5xl">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-md border border-zinc-200 bg-zinc-50 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <img
                    src={activeCstp.image}
                    alt={activeCstp.alt}
                    className="h-[min(42vh,360px)] min-h-[220px] w-full rounded-md object-cover"
                  />
                  <div className="max-w-2xl text-center">
                    <h3 className="text-lg font-semibold text-foreground">{activeCstp.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
                      {activeCstp.text}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                  {cstpCards.map((card, index) => (
                    <button
                      key={card.title}
                      type="button"
                      aria-pressed={activeCstpCard === index}
                      onMouseEnter={() => setActiveCstpCard(index)}
                      onFocus={() => setActiveCstpCard(index)}
                      onClick={() => setActiveCstpCard(index)}
                      className={`group h-full overflow-hidden rounded-md border bg-white p-0 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:bg-zinc-950 ${
                        activeCstpCard === index
                          ? "border-zinc-900 ring-2 ring-zinc-900 dark:border-white dark:ring-white"
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                      <span className="block px-2 py-3 text-center text-xs font-semibold text-foreground">
                        {card.title.split(":")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
          </section>

          <section id="artifacts" className="scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Developing as a Professional Educator</h2>
            <div className="w-full max-w-4xl text-left">
              <div className="overflow-hidden touch-pan-y space-y-6">

                    <h3 className="text-l font-semibold text-center">Professional Goal</h3>
                    
                    <p className="mx-auto max-w-3xl text-center font-medium leading-relaxed text-sm text-muted-foreground">
                      One of my biggest professional goals is continuing to strengthen student communication and ownership
                       within mathematics and project-based learning environments. I want students to move beyond simply 
                       finding answers and instead confidently explain, justify, and apply their thinking both verbally and 
                       in writing. I also want to continue refining how I use assessment data, collaborative structures, and 
                       academic language supports to make instruction more responsive and accessible for all learners.
                    </p>
                    <h3 className="text-l font-semibold text-center">Actions to Meet My Goal</h3>
                    
                    <p className="mx-auto max-w-3xl text-center font-medium leading-relaxed text-sm text-muted-foreground">
                      To achieve this goal, I plan to continue designing lessons that prioritize discourse, collaboration, 
                      and productive struggle. I will use student assessment data, exit tickets, and classroom discussions 
                      to identify misconceptions and adjust instruction in real time. I also plan to collaborate with 
                      instructional coaches and colleagues to refine questioning strategies, group structures, and talk 
                      moves that encourage deeper student thinking. I will know I am making progress when students are 
                      able to independently explain their reasoning, engage in meaningful discussions, and demonstrate 
                      stronger conceptual understanding across assessments and classroom activities.
                    </p>
                    <h3 className="text-l font-semibold text-center">How I Will Remain a Connected Educator</h3>
                    
                    <p className="mx-auto max-w-3xl text-center font-medium leading-relaxed text-sm text-muted-foreground">
                      I will remain connected as an educator by continuing to seek out opportunities for growth, 
                      collaboration, and reflection. Professional development, coaching conversations, and 
                      collaboration with colleagues provide valuable perspectives that help improve my teaching 
                      practice. I also want to continue exploring technology tools, engineering-based learning, 
                      and project-based instruction that make learning more engaging and relevant for students. 
                      Remaining open to feedback and adapting to student needs will help me continue growing 
                      throughout my career.
                    </p>
                    <h3 className="text-l font-semibold text-center">My Advice to New Teachers</h3>
                    
                    <p className="mx-auto max-w-3xl text-center font-medium leading-relaxed text-sm text-muted-foreground">
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
          <section id="reflections" className="scroll-mt-24 w-full min-h-screen px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Contributing to the Profession</h2>
            <div className="w-full max-w-4xl text-left">
              <Carousel className="w-full" setApi={setContributionApi}>
              <div className="overflow-hidden touch-pan-y">
                <CarouselContent>
                  {/* PDF CarouselItems */}
                  <CarouselItem>
                    <div className="mx-auto mb-5 max-w-3xl rounded-md border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                    <h3 className="text-l font-semibold">NotebookLM</h3>
                    <p className="mt-3 font-medium leading-relaxed text-sm text-muted-foreground">
                     NotebookLM has become a valuable tool for organizing information, summarizing resources, and 
                     supporting lesson preparation. I use it to upload readings, lesson materials, and instructional 
                     documents so I can quickly generate summaries, guiding questions, and key ideas for instruction. 
                     It has been especially helpful when preparing review materials, analyzing complex texts, or organizing 
                     ideas across multiple classes and projects. Teaching multiple topics while controlling the information that is 
                     being used to help develop lessons and ideas makes creating new curriculum much easier than contantly looking through
                     already sourced material piece by piece. I am excited to continue using NotebookLM because it saves 
                     planning time while helping create more organized and accessible learning materials for students.
                    </p>
                    </div>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={notebookLM} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="NotebookLM screenshot" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="mx-auto mb-5 max-w-3xl rounded-md border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                    <h3 className="text-l font-semibold">Lesson Plan Rubric</h3>
                    <p className="mt-3 font-medium leading-relaxed text-sm text-muted-foreground">
                      This is a rubric that I created that sets up expectations for effective secondary math lesson planning.
                      It focuses on the purpose of the activity, criteria as well as questions. It is flexible enough to add 
                      things in or take things out without being too cumbersome and still maintaning a high level of rigor. 
                    </p>
                    </div>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={lessonRubric} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="Lesson Plan Rubric" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="mx-auto mb-5 max-w-3xl rounded-md border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                    <h3 className="text-l font-semibold">OneNote</h3>
                    <p className="mt-3 font-medium leading-relaxed text-sm text-muted-foreground">
                      OneNote has been one of my most useful organizational tools for lesson planning,
                       coaching notes, induction reflections, and classroom resources. I use it to 
                       quickly organize instructional ideas, observation feedback, assessment data, 
                       and lesson adjustments in one place. It has helped streamline planning and 
                       reflection, especially when balancing multiple courses and long-term projects. Using
                       this application works best with a stylus however, it can be utilized without one as 
                       well.
                    </p>
                    </div>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={oneNoteWriteUp} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="OneNote planning write-up" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="mx-auto mb-5 max-w-3xl rounded-md border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                    <h3 className="text-l font-semibold">Canva</h3>
                    <p className="mt-3 font-medium leading-relaxed text-sm text-muted-foreground">
                     I regularly use Canva to create slide decks, student-facing handouts, project visuals, and 
                     collaborative activities for both my IM3 Honors and MESA classes. Canva has helped me make 
                     lessons more visually engaging and easier for students to follow, especially during project-based 
                     learning and engineering design activities. I plan to continue using it because it allows students 
                     to present ideas creatively while also supporting organization and accessibility for visual learners.
                    </p>
                    </div>
                    <div className="w-full max-w-4xl overflow-y-auto rounded-md mx-auto">
                      <iframe src={mesaEthics} className="w-full h-[min(60vh,600px)] min-h-[320px] max-w-full rounded-md" title="MESA Ethics Canva presentation" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </div>
              <CarouselPrevious className='text-black'/>
              <CarouselNext className='text-black'/>
              <div className="mt-6 flex items-center justify-center gap-2">
                {contributionSlides.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    onClick={() => contributionApi?.scrollTo(index)}
                    className={`h-2.5 rounded-full p-0 transition-all ${
                      activeContributionSlide === index
                        ? "w-8 bg-zinc-900 dark:bg-white"
                        : "w-2.5 bg-zinc-300 hover:bg-zinc-500 dark:bg-zinc-700"
                    }`}
                    aria-label={`Show ${slide} slide`}
                    aria-current={activeContributionSlide === index ? "true" : undefined}
                  />
                ))}
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {activeContributionSlide + 1} of {contributionSlides.length}: {contributionSlides[activeContributionSlide]}
              </p>
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
