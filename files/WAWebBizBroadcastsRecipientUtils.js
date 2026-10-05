__d(
  "WAWebBizBroadcastsRecipientUtils",
  [
    "WAJids",
    "WAWebApiContact",
    "WAWebAudienceResolver",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = _(e);
      return t == null ? null : g(t);
    }
    function s(t) {
      var n;
      return (n = e(t)) != null
        ? n
        : o("WAWebFrontendContactGetters").getDisplayName(t);
    }
    function u(e) {
      var t = new Map(
        e.map(function (e) {
          var t;
          return [e, (t = _(e)) != null ? t : e];
        }),
      );
      return [].concat(e).sort(function (e, n) {
        var r, a;
        return o("WAWebContactComparator").ContactComparator(
          (r = t.get(e)) != null ? r : e,
          (a = t.get(n)) != null ? a : n,
        );
      });
    }
    function c(e, t, n) {
      n === void 0 && (n = !1);
      var r = t.trim();
      if (r === "") return e;
      var o = r.toLowerCase(),
        a = r.replace(/\D/g, "");
      return e.filter(function (e) {
        var t, r;
        return (
          (!n && s(e).toLowerCase().includes(o)) ||
          (a !== "" &&
            ((t = (r = f(e)) == null ? void 0 : r.user) != null
              ? t
              : ""
            ).includes(a))
        );
      });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAudienceResolver").resolveAudienceExpression(e),
            n = t.length;
          return (
            n >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS &&
            n <= o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit()
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      try {
        var t,
          n = o("WAWebWidFactory").createUserWidOrThrow(
            o("WAJids").toLidUserJid(e),
          ),
          r = o("WAWebContactCollection").ContactCollection.get(n);
        if (r != null) return r;
        var a = o("WAWebWidFactory").createUserWidOrThrow(
          o("WAJids").toPhoneUserJid(e),
        );
        return (t = o("WAWebContactCollection").ContactCollection.get(a)) !=
          null
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      if (g(e) != null) return e;
      if (!e.id.isLid()) return null;
      var t = f(e),
        n =
          t == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(t);
      return n != null && g(n) != null ? n : null;
    }
    function f(e) {
      var t;
      return e.id.isLid()
        ? (t = e.phoneNumber) != null
          ? t
          : o("WAWebApiContact").getAlternateUserWid(e.id)
        : e.id;
    }
    function g(e) {
      var t = o("WAWebContactGetters").getName(e),
        n = t == null ? void 0 : t.trim();
      return n == null || n === "" ? null : n;
    }
    ((l.MIN_RECIPIENTS = o(
      "WAWebBizBroadcastRecipientLimitCommon",
    ).MIN_RECIPIENTS),
      (l.getRecipientLimit = o(
        "WAWebBizBroadcastRecipientLimitCommon",
      ).getRecipientLimit),
      (l.getSavedRecipientName = e),
      (l.getRecipientPickerDisplayName = s),
      (l.sortByRecipientPickerName = u),
      (l.filterByRecipientPickerQuery = c),
      (l.isPredicateEligibleForSuggestedCard = d),
      (l.getContactByUserId = p));
  },
  98,
);
