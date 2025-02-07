import Image from "next/image"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
        <h1 className="text-4xl font-serif font-bold mb-6 animate-slideUp">About Banggol Tebu Nursery</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <p className="mb-4">
              Banggol Tebu Nursery has been a family-owned business since 2020, specializing in a wide variety of flower
              and fruit trees. Our mission is to provide high-quality plants and expert advice to help our customers
              create beautiful and bountiful gardens.
            </p>
            <p className="mb-4">
              Located in the heart of Terengganu, our nursery benefits from the region&apos;s rich soil and tropical climate,
              allowing us to grow healthy and robust plants.
            </p>
            <h2 className="text-2xl font-serif font-bold mb-2">Contact Us</h2>
            <p>Email: info@banggoltebunursery.com</p>
            <p>Phone: +60 13-994 7618</p>
            <p>Address: Banggol Tebu Nursery, Lot 63187, Jalan Tanah Lot, Kg Kuala Kejir, 21700 Kuala Berang, Terengganu</p>
          </div>

          <div className="animate-scaleIn" style={{ animationDelay: "0.4s" }}>
            <Image
              src="/images/about.jpg"
              alt="Owner of Banggol Tebu Nursery"
              width={400}
              height={400}
              className="rounded-lg shadow-md"

            />
            <p className="mt-2 text-center italic">Puan Aminah, Owner of Banggol Tebu Nursery</p>
          </div>
        </div>
      </div>
    </main>
  )
}

