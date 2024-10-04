export function SometimesThrowsAnError() {
  const randomNumber = Math.random()
  if (randomNumber > 0.5) {
    throw new Error('Oops, something went wrong this time')
  } else {
    console.log('All is well this time')
  }

  return <div>All is well this time</div>
}
