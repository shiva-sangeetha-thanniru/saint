import Button from '../ui/Button'
import Container from '../ui/Container'
import { APP_NAME } from '../../constants/app'

function CtaSection() {
  return (
    <section id="cta" className="py-12 sm:py-16">
      <Container>
        <div className="reveal-on-scroll rounded-3xl border border-[#98c7ee] bg-[linear-gradient(145deg,#0f5fd4,#0ea5b1)] p-8 text-center shadow-[0_24px_58px_rgba(15,95,212,0.35)] sm:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Ready to move from manual QA to autonomous quality engineering?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-cyan-50 sm:text-base">
            Launch {APP_NAME} and generate your first governed end-to-end workflow in minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="secondary" className="border-white/70 bg-white text-[#0f5fd4] hover:bg-cyan-50">
              {`Launch ${APP_NAME} Chat`}
            </Button>
            <Button variant="ghost" className="border border-white/35 text-white hover:bg-white/20 hover:text-white">
              Contact Platform Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
