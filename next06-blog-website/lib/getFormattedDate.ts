export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-Us', { dateStyle: 'long'}).format(new Date(dateString))
}