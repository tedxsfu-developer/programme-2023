import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ReturnButton from "@/components/ReturnButton";
import { speakerData } from "@/data/SpeakerData";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import { usePathname } from "next/navigation";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: Link,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({ source, speakerData }) {
  return (
    <main className=" min-h-screen bg-black text-white p-3">
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <ReturnButton></ReturnButton>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1 className="text-heading">{speakerData.title}</h1>
        <h4 className="text-ted-grey uppercase text-caption">
          {speakerData.desc}
        </h4>
        {speakerData.desc && <p className="info">{speakerData.info}</p>}
      </div>
      {/* <main>
        <MDXRemote {...source} components={components} />
      </main> */}

      {/* styling for elements are HERE */}
      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </main>
  );
}

export const getStaticProps = async () => {
  const pathname = usePathname();
  const speakers = speakerData.filter((p) => p.href.toString() === pathname);
  return {
    props: {
      speaker: speakerData[0],
    },
  };
  // CHANGE ME ON SLUG (line 62)
  // const postFilePath = path.join(POSTS_PATH("speakers"), `${params.slug}.mdx`);
  // const source = fs.readFileSync(postFilePath);

  // const { content, data } = matter(source);

  // const mdxSource = await serialize(content, {
  //   // Optionally pass remark/rehype plugins
  //   mdxOptions: {
  //     remarkPlugins: [],
  //     rehypePlugins: [],
  //   },
  //   scope: data,
  // });

  // return {
  //   props: {
  //     source: mdxSource,
  //     frontMatter: data,
  //   },
  // };
};

export const getStaticPaths = async () => {
  const paths = speakerData.map((items) => ({
    params: { slug: items.href.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
  // // CHANGE ME ON SLUG (line 86)
  // const paths = postFilePaths("speakers")
  //   // Remove file extensions for page paths
  //   .map((path) => path.replace(/\.mdx?$/, ""))
  //   // Map the path into the static paths object required by Next.js
  //   .map((slug) => ({ params: { slug } }));

  // return {
  //   paths,
  //   fallback: false,
  // };
};
