__d(
  "WAWebEmployeeCommandLimits",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        taskTitle: 200,
        taskDescription: 5e3,
        thanksText: 1e3,
        thanksPeople: 10,
        vcTitle: 100,
      },
      l = "\u2026",
      s = /^T[0-9]{1,20}$/,
      u =
        /^https:\/\/me\.internalmeta\.com\/community\/thanks\?thanks_ids(?:\[|%5B)0(?:\]|%5D)=[0-9]+(?:&thanks_ids(?:\[|%5B)[0-9]+(?:\]|%5D)=[0-9]+)*$/i,
      c =
        /^https:\/\/(?:fb|meta)\.zoom\.us\/j\/[0-9]{9,12}(?:\?[\w.~=&%-]*)?$/i;
    function d(e, t) {
      return e === "task"
        ? s.test(t)
        : e === "thanks"
          ? u.test(t)
          : e === "vc"
            ? c.test(t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e, t) {
      var n = Array.from(e);
      if (n.length <= t) return e;
      var r = n.slice(0, t - 1).join(""),
        o = r.lastIndexOf(" "),
        a = o >= Math.floor(t * 0.7) ? r.slice(0, o) : r;
      return "" + a.trimEnd() + l;
    }
    function p(e) {
      return Array.from(e).length;
    }
    ((i.HANDOFF_LIMITS = e),
      (i.isValidHandoffRef = d),
      (i.capText = m),
      (i.getTextLength = p));
  },
  66,
);
