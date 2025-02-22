import '../../css/inspiration.css';


export default function Inspiration() {
    return (
        <div className="my-8">
            <h1 className="ml-[50vw] text-8xl text-white size-fit -translate-x-[50%] bg-black rounded-lg px-10">Inspiration</h1>
            <main className="textConfig">
                <p>
                    This project was inspired by a crisis we almost had on our hands. A while back I 
                    noticed our family photos were corrupted and inaccessible. This caused a lot of 
                    panic amongst my family so we took it to geek squad to get it fixed. During that
                    whole process that&apos;s when it occured to me that these photos hold a lot of
                    sentimental value.
                </p>
                <br />
                <p>
                    The problem was these photos were on one computer that only one person in my family
                    has access to. We needed a way so all the members in our family can access and view
                    these photos from online. That&apos;s when I got the idea to build this website to act
                    as an archive of sorts. The idea grew from storing all of the old photos to a grander
                    purpose: storing the new ones!
                </p>
                <br />
                <p>
                    I know you may be thinking, storing new photos sounds a whole heck of a lot similar to
                    storing old ones. That&apos;s true it is but, that&apos;s only the surface level. With
                    the implementation of photo uploading for my family members, this archive will now be 
                    able to grow until the end of time. Giving my great, great, great, great grandkids the 
                    opportunity to see what I was up to back then.
                </p>
                <br />
                <p>Some potential things I would like to do with this platform in the future is:</p>
                <ol>
                    <li>Allocate storage resources for my extended family and access them through different routes</li>
                    <li>
                        Migrate the current data from Amazon Web Services Simple Storage Solution to my own Network Attach Storage device
                        for cost effective reasons. 
                    </li>
                    <li>Develop an IOS app so my family can have it on their phones</li>
                </ol>
            </main>
        </div>
    );
}