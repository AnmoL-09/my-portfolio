export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-24" id="contact">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full px-4 py-2 bg-gray-900 rounded" placeholder="Your Name" />
        <input className="w-full px-4 py-2 bg-gray-900 rounded" placeholder="Your Email" />
        <textarea className="w-full px-4 py-2 bg-gray-900 rounded" placeholder="Your Message"></textarea>
        <button className="bg-white text-black px-6 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
