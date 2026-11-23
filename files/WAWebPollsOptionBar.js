__d(
  "WAWebPollsOptionBar",
  ["WAWebBar.react", "react"],
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
        n = e.checked,
        o = e.isAdminOrOwner,
        a = e.isCorrectOption,
        i = e.isPollSentByMe,
        l = e.result,
        c;
      return (
        a != null
          ? n
            ? (c = a ? u.quizCheckedCorrectOption : u.quizCheckedWrongOption)
            : (c = a && !o ? u.quizCheckedCorrectOption : u.quizUnchecked)
          : (c = i ? u.barSender : u.barReceiver),
        s.jsx(r("WAWebBar.react"), {
          barXStyle: c,
          containerXStyle: i ? u.barContainerSender : u.barContainerReceiver,
          percentage:
            (t = l == null ? void 0 : l.percentageOfMostVotedForOption) != null
              ? t
              : 0,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
