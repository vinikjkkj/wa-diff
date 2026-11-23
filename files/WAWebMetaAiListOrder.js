__d(
  "WAWebMetaAiListOrder",
  [
    "WAWebABProps",
    "WAWebLeadListConstants",
    "WAWebListUtils",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type != null && !o("WAWebSchemaLabel").ListType.isValid(e.type);
    }
    function s(e) {
      return (
        o("WAWebListUtils").isLeadList(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_lists_full_width_filters",
        )
      );
    }
    function u(t) {
      return (
        t.type !== o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED &&
        !e(t) &&
        t.predefinedId !==
          o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID &&
        t.type !== o("WAWebSchemaLabel").ListType.CHANNELS &&
        !o("WAWebListUtils").isHiddenToYouList(t.type) &&
        !s(t) &&
        (t.id === o("WAWebListUtils").META_AI_LIST_ID ||
          (t.isActive !== !1 && t.name !== ""))
      );
    }
    function c(e) {
      return (
        u(e) ||
        o("WAWebListUtils").isLeadList(e) ||
        (e.type === o("WAWebSchemaLabel").ListType.CHANNELS &&
          e.isActive !== !1 &&
          !!e.name)
      );
    }
    function d(e) {
      var t,
        n = (t = e.orderIndex) != null ? t : Number(e.id);
      return Number.isFinite(n) ? n : 0;
    }
    function m(e, t) {
      var n = d(e) - d(t);
      return n !== 0 ? n : Number(e.id) - Number(t.id);
    }
    function p(e, t) {
      var n = e.filter(u).sort(m),
        r = n.find(t);
      if (r != null) return d(r) - 0.5;
      var o = n[n.length - 1];
      return o == null ? 0 : d(o) + 1;
    }
    function _(e) {
      var t = e.filter(u).sort(m),
        n = t.findIndex(function (e) {
          return e.id === o("WAWebListUtils").META_AI_LIST_ID;
        });
      return n > 0 ? t[n - 1].id : null;
    }
    function f(e, t, n) {
      n === void 0 && (n = u);
      var r = t.filter(function (e) {
        return e.id !== o("WAWebListUtils").META_AI_LIST_ID && n(e);
      });
      if (
        !t.some(function (e) {
          return e.id === o("WAWebListUtils").META_AI_LIST_ID;
        }) ||
        r.length === 0
      )
        return null;
      if (e == null) return Math.min.apply(Math, r.map(d)) - 0.5;
      var a = r.find(function (t) {
        return t.id === e;
      });
      return a == null ? null : d(a) + 0.5;
    }
    async function g(e, t, n) {
      if (!o("WAWebListUtils").isMetaAiListEnabled()) {
        await t();
        return;
      }
      var r = _(await e());
      await t();
      var a = f(r, await e());
      a != null && (await n(a));
    }
    function h(e, t, n) {
      var r, a;
      if (o("WAWebListUtils").isMetaAiListEnabled()) {
        var i =
            ((r = t.find(function (e) {
              return e.id === o("WAWebListUtils").META_AI_LIST_ID;
            })) == null
              ? void 0
              : r.orderIndex) !==
            ((a = e.find(function (e) {
              return e.id === o("WAWebListUtils").META_AI_LIST_ID;
            })) == null
              ? void 0
              : a.orderIndex),
          l = f(_(e), t);
        !i && l != null && n(l);
      }
    }
    ((l.isVisibleListRow = u),
      (l.isManageListRow = c),
      (l.getDefaultMetaAiOrderIndex = p),
      (l.getMetaAiPredecessorId = _),
      (l.getReanchoredMetaAiOrderIndex = f),
      (l.keepMetaAiListInPlace = g),
      (l.reanchorMetaAiListInMemory = h));
  },
  98,
);
