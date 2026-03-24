"use client";
import { BookOpen, Briefcase, Code2, ExternalLink, Lock, Mail } from "lucide-react";

import nikachu from "./nikachu.png"
import twitter_logo from "./twitter.svg"
import github_logo from "./github.svg"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-16 antialiased">
      <div className="max-w-3xl w-full z-10 relative">

        <header className="text-center mb-12">
          <div className="inline-block p-1.5 rounded-full glass-profile mb-5">
            <div className="w-28 h-28 rounded-full bg-slate-800/80 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-slate-700">
              <Image src={nikachu} alt={"nikachu"} className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3 drop-shadow-lg">nikachu.net</h1>
          <p className="text-slate-300 max-w-md mx-auto leading-relaxed font-medium">
            nikachu.netは、nikachuの管理するドメインです。<br />
            nikachuについては、ポートフォリオをご覧ください。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">

          {/* <a href="https://portfolio.nikachu.net" className="glass-card hover-scale p-8 rounded-3xl col-span-1 md:col-span-2 flex items-center justify-between group cursor-pointer">
            <div>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-300 mb-4 backdrop-blur-md border border-blue-500/10">
                <Briefcase className="w-7 h-7" />
              </span>
              <h2 className="text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">Portfolio</h2>
              <p className="text-slate-400 mt-2 font-medium">制作実績・プロジェクト一覧を見る</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all backdrop-blur-sm shadow-sm border border-slate-600/30">
              <ArrowRight className="w-7 h-7" />
            </div>
          </a> */}

          <a href="https://portfolio.nikachu.net" className="glass-card hover-scale p-8 rounded-3xl col-span-1 md:col-span-1 flex flex-col justify-between group cursor-pointer h-60 md:h-auto">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-300 mb-4 backdrop-blur-md border border-blue-500/10">
                <Briefcase className="w-7 h-7" />
              </span>
              <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-blue-300 transition-colors" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">Portfolio</h2>
              <p className="text-sm text-slate-400 mt-2 font-medium">作ったアプリや書籍、経歴を見る</p>
            </div>
          </a>

          <a href="https://nikachu.hatenablog.com" className="glass-card hover-scale p-8 rounded-3xl flex flex-col justify-between group cursor-pointer h-60 md:h-auto">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 mb-4  backdrop-blur-md border border-emerald-500/10">
                <Code2 className="w-7 h-7" />
              </span>
              <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-emerald-300 transition-colors" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">Notes</h2>
              <p className="text-sm text-slate-400 mt-2 font-medium">技術記事や思っていること</p>
            </div>
          </a>

          <a href="https://nikatech.nikachu.net" className="glass-card hover-scale p-8 rounded-3xl flex flex-col justify-between group cursor-pointer h-60 md:h-auto">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 mb-4 backdrop-blur-md border border-amber-500/10">
                <BookOpen className="w-7 h-7" />
              </span>
              <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-amber-300 transition-colors" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">同人サークル nikatech</h2>
              <p className="text-sm text-slate-400 mt-2 font-medium">同人活動について</p>
            </div>
          </a>

          {/* <a href="https://note.com" className="glass-card hover-scale p-8 rounded-3xl flex flex-col justify-between group cursor-pointer h-60 md:h-auto">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 mb-4 backdrop-blur-md border border-amber-500/10">
                <BookOpen className="w-7 h-7" />
              </span>
              <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-amber-300 transition-colors" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">Notes</h2>
              <p className="text-sm text-slate-400 mt-2 font-medium">日常の思考・エッセイ・雑記</p>
            </div>
          </a> */}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-16">
          <a href="https://github.com/nikachu2012" target="_blank" className="glass-card hover-scale p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group cursor-pointer">
            {/* <Github calcMode="w-9 h-9 text-slate-400 group-hover:text-white transition-colors" /> */}
            <Image src={github_logo} alt={"GitHub"}  className="w-9 h-9 text-slate-400 group-hover:text-white transition-colors" />

            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">GitHub</span>
          </a>
          <a href="https://twitter.com/nikachu2012" target="_blank" className="glass-card hover-scale p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group cursor-pointer">
            {/* <Twitter  /> */}
            <Image src={twitter_logo} alt={"Twitter"} className="w-9 h-9 text-sky-400 group-hover:text-sky-300 transition-colors" />
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">Twitter</span>
          </a>
          <button
            type="button"
            onClick={() => setShowEmailModal(true)}
            className="glass-card hover-scale p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group cursor-pointer"
            aria-haspopup="dialog"
            aria-expanded={showEmailModal}
          >
            <Mail className="w-9 h-9 text-rose-400 group-hover:text-rose-300 transition-colors" />
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">E-mail</span>
          </button>
          {/* <a href="mailto:work@nikachu.net" className="glass-card hover-scale p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group cursor-pointer">
            <Mail className="w-9 h-9 text-rose-400 group-hover:text-rose-300 transition-colors" />
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">E-mail</span>
          </a> */}
          <a href="https://portfolio.nikachu.net/publickey" className="glass-card hover-scale p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 group cursor-pointer">
            <Lock className="w-9 h-9 text-rose-400 group-hover:text-rose-300 transition-colors" />
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">PGP Publickey</span>
          </a>
        </div>

        <footer className="text-center text-slate-500 text-sm font-medium">
          <p>Made with ❤️(U+2764) by nikachu with Gemini 3 Pro.<br />
            Thanks to open source software contributors!</p>
        </footer>

      </div>

      {/* E-mail モーダル */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowEmailModal(false)}
            aria-hidden="true"
          />
          <div role="dialog" aria-modal="true" className="relative glass-card bg-slate-900/95 text-white p-6 rounded-2xl shadow-lg z-10 w-full max-w-sm mx-4">
            <h3 className="text-lg font-bold mb-2">E-mail</h3>
            <pre className="font-mono bg-slate-800/70 p-3 rounded text-sm">work at nikachu dot net</pre>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => setShowEmailModal(false)}
                className="glass-card hover-button px-4 py-2 rounded cursor-pointer "
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
