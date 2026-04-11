__d(
  "WAWebInitialsFromNameUtils",
  ["$InternalEnum", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "ARABIC",
        "LATIN",
        "HEBREW",
        "THAI",
        "GUJARATI",
        "DEVANAGARI",
        "CYRILLIC",
        "BENGALI",
        "HAN",
      ]),
      s = new RegExp(
        /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]/,
      ),
      u = new RegExp(
        /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0249\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/,
      ),
      c = new RegExp(
        /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/,
      ),
      d = new RegExp(/[\u0E01-\u0E3A\u0E40-\u0E5B]/),
      m = new RegExp(
        /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/,
      ),
      p = new RegExp(/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]/),
      _ = new RegExp(
        /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]/,
      ),
      f = new RegExp(
        /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/,
      ),
      g = new RegExp(
        /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]/,
      ),
      h = new Map([
        [e.ARABIC, s],
        [e.LATIN, u],
        [e.HEBREW, c],
        [e.THAI, d],
        [e.GUJARATI, m],
        [e.DEVANAGARI, p],
        [e.CYRILLIC, _],
        [e.BENGALI, f],
        [e.HAN, g],
      ]),
      y = new RegExp(
        /[\u093A\u093B\u093E-\u094C\u094E\u094F\u0955-\u0957\u0962\u0963]/,
      ),
      C = new RegExp(/[\u09BE-\u09CC\u09E2\u09E3]/),
      b = new RegExp(/[\u0ABE-\u0ACC\u0AE2\u0AE3]/),
      v = new RegExp(/[\u0E30-\u0E59]/),
      S = D([s, d, m, p, f]),
      R = D([p, f, m]),
      L = D(Array.from(h.values()));
    function E(e) {
      return Array.from(h.keys()).find(function (t) {
        var n = h.get(t);
        return n == null ? void 0 : n.test(e);
      });
    }
    function k(e) {
      return S.test(e);
    }
    function I(e) {
      return g.test(e);
    }
    function T(e) {
      return L.test(e);
    }
    function D(e) {
      return new RegExp(
        e
          .map(function (e) {
            return e.source;
          })
          .join("|"),
      );
    }
    function x(e) {
      var t = !1;
      e.firstName != null && (t = k(e.firstName));
      var n = e.firstName != null && e.firstName !== "" && !I(e.firstName),
        r = t !== !0 && e.lastName != null && e.lastName !== "";
      e.firstName != null &&
        e.firstName !== "" &&
        g.test(e.firstName) &&
        !r &&
        (n = !0);
      var o = e.lastName === "" && e.firstName === "",
        a = n !== !0 && r !== !0 && !o;
      return {
        showFirstNameInitial: n,
        showLastNameInitial: r,
        showPushnameInitial: a,
      };
    }
    function $(e, t, n) {
      var o,
        a = e == null ? void 0 : e.trim(),
        i = null;
      a != null && t != null && (a == null ? void 0 : a.length) > 0
        ? (i = t.trim().replace(a, "").trim())
        : (i = t == null ? void 0 : t.trim());
      var l = r("WAWebL10N").getFullLocale(),
        s = a == null ? void 0 : a.toLocaleUpperCase(l),
        u = (o = i) == null ? void 0 : o.toLocaleUpperCase(l),
        c = n == null ? void 0 : n.toLocaleUpperCase(l);
      return { firstName: s, lastName: u, pushname: c };
    }
    function P(e) {
      var t = e.charAt(0),
        n = e.charAt(1),
        r = null,
        o = null;
      if (
        (p.test(t)
          ? ((r = p), (o = y))
          : f.test(t)
            ? ((r = f), (o = C))
            : m.test(t) && ((r = m), (o = b)),
        !(r == null || o == null))
      )
        return n != null && r.test(t) && !o.test(t) && o.test(n)
          ? t + n
          : r.test(t)
            ? t
            : null;
    }
    function N(e, t) {
      var n = e.charAt(0);
      if (R.test(e)) return P(e);
      if (n != null && d.test(n) && v.test(n)) {
        var r = e == null ? void 0 : e.slice(1).trim(),
          o = r == null ? void 0 : r.charAt(0);
        return T(o) && !v.test(o) ? o : null;
      }
      return I(e) && !t ? e.slice(0, 2) : T(n) ? n : null;
    }
    function M(e) {
      var t = $(e.shortName, e.name, e.pushname),
        n = x(t),
        r = null,
        o = null,
        a = t.firstName,
        i = n.showFirstNameInitial === !0 && n.showLastNameInitial === !1;
      return (
        n.showFirstNameInitial === !0 && a != null && (r = N(a, i)),
        n.showLastNameInitial === !0 &&
          t.lastName != null &&
          (o = N(t.lastName, i)),
        n.showPushnameInitial === !0 &&
          t.pushname != null &&
          ((r = N(t.pushname, !0)), (o = null)),
        r != null && o != null && E(r) !== E(o) && (o = null),
        { firstInitial: r, secondInitial: o }
      );
    }
    function w(e) {
      return M({
        shortName: e == null ? void 0 : e.shortName,
        name: e == null ? void 0 : e.name,
        pushname: e == null ? void 0 : e.pushname,
      });
    }
    function A(e) {
      return M({
        name: e.name,
        shortName: e.name.trim().split(" ")[0],
        pushname: null,
      });
    }
    ((l.InitialsAlphabets = e),
      (l.supportedAlphabetsMap = h),
      (l.getInitialsFromNames = M),
      (l.getInitialsFromContact = w),
      (l.getInitialsFromAdminProfile = A));
  },
  98,
);
