__d(
  "WAWebGroupStringsAction",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebWid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u(e, y, C, b, t);
    }
    function u(e, t, n, a, i) {
      var l;
      if (e.status === 207) {
        var s = {};
        e.participants.forEach(function (e) {
          var t = e.userWid;
          if (r("WAWebWid").isWid(t)) {
            var n = e.code,
              a = n;
            if (n !== "403" && n !== "207") {
              if (n === "421") {
                var i,
                  l,
                  u =
                    (i =
                      (l = e.subCode) == null
                        ? void 0
                        : l.membershipApprovalRequestError) != null
                      ? i
                      : "";
                a = n + ":" + u;
              }
              s[a] || (s[a] = []);
              var c = o("WAWebContactCollection").ContactCollection.get(t);
              c && s[a].push(c);
            }
          }
        });
        var u = [];
        for (var p in s) {
          var _ = p.split(":"),
            f = _[0],
            g = _[1] != null && _[1] !== "" ? parseInt(_[1], 10) : void 0,
            h = c(t, n, m, parseInt(f, 10), g, s[p]);
          h && u.push(h);
        }
        u.length > 0 ? (l = u.join("\n")) : (l = a());
      } else l = c(t, n, d, e.status, void 0, i);
      return l;
    }
    function c(e, t, n, a, i, l) {
      var s = r("WAWebFbtIntlList")(
          l.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(e);
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        u = a === 200,
        c = u ? e(s, l.length) : t(s, l.length, a),
        d = u ? "" : n(a, i, l.length);
      return c.toString() + d.toString();
    }
    function d(e, t) {
      var n = "";
      switch (e) {
        case 403:
          n = " " + s._(/*BTDS*/ "").toString();
          break;
        case 408:
          n = " " + s._(/*BTDS*/ "", [s._plural(1)]).toString();
          break;
        case 404:
          n = " " + s._(/*BTDS*/ "").toString();
          break;
        case 429:
          n = " " + s._(/*BTDS*/ "").toString();
          break;
      }
      return n;
    }
    function m(e, t, n) {
      var o = "";
      switch (e) {
        case 401:
        case 406:
        case 409:
          break;
        case 404:
          o = " " + s._(/*BTDS*/ "", [s._plural(n)]).toString();
          break;
        case 408:
          o = " " + s._(/*BTDS*/ "", [s._plural(n)]).toString();
          break;
        case 419:
          o = " " + s._(/*BTDS*/ "").toString();
          break;
        case 421: {
          t == null
            ? (o = " " + s._(/*BTDS*/ "", [s._plural(n)]).toString())
            : t === 304 && (o = " " + s._(/*BTDS*/ "").toString());
          break;
        }
        case 402: {
          o =
            " " +
            (r("justknobx")._("8068")
              ? s._(/*BTDS*/ "", [s._plural(n)])
              : s._(/*BTDS*/ "", [s._plural(n)])
            ).toString();
          break;
        }
        case 500:
          o = " " + s._(/*BTDS*/ "").toString();
          break;
        default:
          o = " " + s._(/*BTDS*/ "").toString();
          break;
      }
      return o;
    }
    function p(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function _(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function f(e) {
      var t = e._status,
        n = e.memberNames,
        r = e.plural;
      return s._(/*BTDS*/ "", [s._plural(r), s._param("memberNames", n)]);
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function y(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function C(e, t, n) {
      switch (n) {
        case 406:
          return s._(/*BTDS*/ "", [s._param("member", e)]);
        default:
          return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
      }
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    function v(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function S(e, t, n) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function R() {
      return s._(/*BTDS*/ "");
    }
    function L(e, t, n) {
      switch (n) {
        case 406:
          return s._(/*BTDS*/ "", [s._param("member", e)]);
        default:
          return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
      }
    }
    function E(e, t) {
      return s._(/*BTDS*/ "", [s._plural(t), s._param("memberNames", e)]);
    }
    function k() {
      return s._(/*BTDS*/ "");
    }
    ((l.formatRemoveResult = e),
      (l.formatResult = u),
      (l.addingString = p),
      (l.addSuccessString = _),
      (l.addFailedString = f),
      (l.addPartialFailedString = g),
      (l.removingString = h),
      (l.promoteSuccessString = v),
      (l.promoteFailedString = S),
      (l.promotePartialFailedString = R),
      (l.demoteFailedString = L),
      (l.demoteSuccessString = E),
      (l.demotePartialFailedString = k));
  },
  226,
);
