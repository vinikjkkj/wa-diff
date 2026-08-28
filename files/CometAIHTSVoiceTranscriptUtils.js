__d(
  "CometAIHTSVoiceTranscriptUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 3;
    function l(e) {
      return e.trim().replace(/\s+/g, " ").toLowerCase();
    }
    function s(e, t) {
      var n = e.trim(),
        r = t.trim();
      return r.startsWith(n)
        ? r
        : n.startsWith(r) || n.includes(r)
          ? n
          : n + " " + r;
    }
    function u(t) {
      return t.slice(-e);
    }
    function c(e) {
      return !/[.!?][\"\')\]]*$/.test(e.trim());
    }
    function d(e, t) {
      return t.length === 0
        ? e
        : t.reduce(function (e, t) {
            var n = l(t.text),
              r = e.findIndex(function (e) {
                return (
                  e.role === t.role &&
                  (t.id != null ? e.id === t.id : l(e.text) === n)
                );
              });
            if (r >= 0) return ((e[r] = t), e);
            var o = e.some(function (e) {
              return e.role === t.role && l(e.text) === n;
            });
            return (o || e.push(t), e);
          }, [].concat(e));
    }
    function m(e) {
      return e
        .filter(function (e) {
          return e.text.trim() !== "";
        })
        .reduce(function (e, t) {
          var n = e[e.length - 1],
            r = t.text.trim(),
            o =
              (n == null ? void 0 : n.id) != null || t.id != null
                ? (n == null ? void 0 : n.id) === t.id
                : !0,
            a =
              (n == null ? void 0 : n.role) === "assistant" &&
              t.role === "assistant" &&
              c(n.text);
          if ((n == null ? void 0 : n.role) === t.role && (o || a)) {
            var i;
            e[e.length - 1] = {
              id: (i = t.id) != null ? i : n.id,
              role: t.role,
              text: s(n.text, r),
            };
          } else e.push({ id: t.id, role: t.role, text: r });
          return e;
        }, []);
    }
    function p(e, t) {
      var n = t.trim();
      if (n === "") return null;
      var r = e.some(function (e) {
        return e.role === "user" && l(e.text) === l(n);
      });
      return r ? null : { role: "user", text: n };
    }
    function _(e, t) {
      var n = m(e),
        r = p(n, t),
        o = r == null ? n : [].concat(n, [r]);
      return u(o);
    }
    function f(e, t, n, r) {
      if (!n) return [];
      if (r) return _(e, t);
      var o = p(e, t);
      return o == null ? [] : [o];
    }
    ((i.mergeTranscriptSources = d), (i.getCaptionMessages = f));
  },
  66,
);
