import { useEffect, useState } from 'react'

function CountdownSection() {
  const releaseDate = new Date('2026-12-31T00:00:00')

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = releaseDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container py-5">
      <div className="countdown-panel">
        <p className="section-kicker">LAUNCH COUNTDOWN</p>
        <h2 className="section-title mb-4">La pesadilla comienza pronto</h2>

        <div className="row g-3 justify-content-center">
          <div className="col-6 col-sm-3">
            <div className="countdown-box">
              <span>{timeLeft.days}</span>
              <small>Días</small>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="countdown-box">
              <span>{timeLeft.hours}</span>
              <small>Horas</small>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="countdown-box">
              <span>{timeLeft.minutes}</span>
              <small>Minutos</small>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="countdown-box">
              <span>{timeLeft.seconds}</span>
              <small>Segundos</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountdownSection