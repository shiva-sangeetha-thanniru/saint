import Button from '../ui/Button'
import Container from '../ui/Container'

function CtaSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="reveal-on-scroll rounded-3xl border border-fuchsia-300/60 bg-gradient-to-r from-[#662d8c] to-[#ed1e79] p-8 text-center shadow-[0_24px_58px_rgba(102,45,140,0.34)] sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to move from manual QA to autonomous quality engineering?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-fuchsia-100 sm:text-base">
            Launch SAINT and generate your first governed end-to-end workflow in minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="secondary" className="border-white/70 bg-white text-[#662d8c] hover:bg-fuchsia-50">
              Launch SAINT Chat
            </Button>
            <Button variant="ghost" className="text-slate-800 hover:bg-white/50 hover:text-slate-900">
              Contact Platform Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
