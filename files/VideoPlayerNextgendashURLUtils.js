__d(
  "VideoPlayerNextgendashURLUtils",
  ["VideoPlayerNextgendashMediaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return p(t) ? t : m(e, t);
    }
    function s(e, t) {
      return e.config.enableTasosBwe
        ? t + (t.indexOf("?") === -1 ? "?" : "&") + "_tlbwe=1"
        : t;
    }
    function u(e, t, n) {
      var r = o(
          "VideoPlayerNextgendashMediaUtils",
        ).makeStartEndByteIndexFromByteRangeMaybeOpenEnded(e, n),
        a = r[0],
        i = r[1];
      return (
        t +
        (t.indexOf("?") === -1 ? "?" : "&") +
        "bytestart=" +
        a +
        (i != null ? "&byteend=" + i : "")
      );
    }
    function c(e) {
      var t = e,
        n = t.lastIndexOf("/"),
        r = t.lastIndexOf("://");
      return (n > r + 2 && (t = t.substring(0, n + 1)), t);
    }
    function d(e) {
      var t = e;
      return (
        (t = c(t)),
        t.endsWith("/") ? c(t.substring(0, t.length - 1)) : t
      );
    }
    function m(e, t) {
      for (var n = c(e), r = t; r.length; )
        if (r.startsWith("./")) r = r.substring(2);
        else if (r.startsWith("../"))
          ((r = r.substring(3)),
            (n = d(n)),
            n.endsWith("/") && (n = n.substring(0, n.length - 1)));
        else if (r.startsWith("..")) ((r = r.substring(2)), (n = d(n)));
        else if (r.startsWith(".")) r = r.substring(1);
        else break;
      return (r && r.length && (n.endsWith("/") || (n += "/"), (n += r)), n);
    }
    function p(e) {
      var t = /^https?:\/\//i;
      return t.test(e);
    }
    ((l.combineSegmentTemplateURL = e),
      (l.addTlbweParamToURLMaybe = s),
      (l.addByteRangeParamsToURL = u));
  },
  98,
);
