import ExpLabel from "../../components/experienceLabel/experienceLabel"

const Experience = () => {
  return (
    <div className="flex flex-col gap-12 items-center content py-16 bg-black min-h-screen">
      <div className="flex flex-col gap-8 text-3xl text-white py-4">
        <p className="text-center py-4">Mi <span className="font-bold">Experiencia</span></p>

        <ExpLabel/>
        <ExpLabel/>
        <ExpLabel/>
      </div>
    </div>
  )
}

export default Experience