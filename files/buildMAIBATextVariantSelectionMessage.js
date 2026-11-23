__d(
  "buildMAIBATextVariantSelectionMessage",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "[System: TEXT_GENERATION_REGENERATE]",
      u = "[System: TEXT_GENERATION_APPLY]";
    function c() {
      return String(s._(/*BTDS*/ ""));
    }
    function d(e, t) {
      return t.length === 0
        ? ""
        : e +
            ":\n" +
            t
              .map(function (e, t) {
                return t + 1 + ". " + e + "\n";
              })
              .join("");
    }
    function m(e) {
      return e.map(function (e) {
        return e.text;
      });
    }
    function p(e) {
      return e.map(function (e) {
        var t = e.edited,
          n = e.id,
          r = e.text;
        return n == null || n === ""
          ? { edited: t, text: r }
          : { edited: t, id: n, text: r };
      });
    }
    function _(e, t) {
      return (
        e +
        "=" +
        JSON.stringify(t).replace(/[\u0085\u2028\u2029]/g, function (e) {
          return "\\u" + e.charCodeAt(0).toString(16).padStart(4, "0");
        })
      );
    }
    function f(e, t, n, r) {
      if (e.length === 0 && t.length === 0) return null;
      var o = u;
      return (
        r != null && /^[\w-]+$/.test(r) && (o += " surface_id=" + r),
        {
          displayMessage: c(),
          message:
            o +
            "\nI selected these options for my ad:\n" +
            d("Primary text", m(e)) +
            d("Headline", m(t)) +
            "This completes my selection. Stage all selected fields together, then show the deterministic publish preview." +
            (n != null && n !== ""
              ? "\n" +
                _("text_gen_selection", {
                  ad_id: n,
                  headlines: p(t),
                  primary_texts: p(e),
                })
              : ""),
        }
      );
    }
    function g(t, n, r, o, a) {
      var i = e;
      (n != null && /^\d+$/.test(n) && (i += " ad_object_ids=" + n),
        (i += " fields=" + r.join(",")));
      var l = d("Primary text", m(o)) + d("Headline", m(a));
      return {
        displayMessage: t,
        message:
          l === ""
            ? i
            : (
                i +
                "\nKeep these selected options and replace the rest:\n" +
                l
              ).trimEnd() +
              "\n" +
              _("text_gen_kept", { headlines: p(a), primary_texts: p(o) }),
      };
    }
    ((l.buildMAIBATextVariantApplyMessage = f),
      (l.buildMAIBATextVariantRegenerateMessage = g));
  },
  226,
);
