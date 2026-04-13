__d(
  "WAWebPollsOptionBar",
  ["WAWebBar.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        barContainerReceiver: { backgroundColor: "x3x0x6p", $$css: !0 },
        barContainerSender: { backgroundColor: "x3x0x6p", $$css: !0 },
        barReceiver: { backgroundColor: "xfn3atn", $$css: !0 },
        barSender: { backgroundColor: "xfn3atn", $$css: !0 },
        quizCheckedCorrectOption: { backgroundColor: "xfn3atn", $$css: !0 },
        quizCheckedWrongOption: { backgroundColor: "xk0ssx3", $$css: !0 },
        quizUnchecked: { backgroundColor: "x1518k6t", $$css: !0 },
      };
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        a = e.checked,
        i = e.isAdminOrOwner,
        l = e.isCorrectOption,
        c = e.isPollSentByMe,
        d = e.result,
        m;
      l != null
        ? a
          ? (m = l ? u.quizCheckedCorrectOption : u.quizCheckedWrongOption)
          : (m = l && !i ? u.quizCheckedCorrectOption : u.quizUnchecked)
        : (m = c ? u.barSender : u.barReceiver);
      var p = c ? u.barContainerSender : u.barContainerReceiver,
        _ =
          (t = d == null ? void 0 : d.percentageOfMostVotedForOption) != null
            ? t
            : 0,
        f;
      return (
        n[0] !== m || n[1] !== p || n[2] !== _
          ? ((f = s.jsx(r("WAWebBar.react"), {
              barXStyle: m,
              containerXStyle: p,
              percentage: _,
            })),
            (n[0] = m),
            (n[1] = p),
            (n[2] = _),
            (n[3] = f))
          : (f = n[3]),
        f
      );
    }
    l.default = c;
  },
  98,
);
