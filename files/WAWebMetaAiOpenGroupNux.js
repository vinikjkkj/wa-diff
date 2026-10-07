__d(
  "WAWebMetaAiOpenGroupNux",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebCriticalEventWamEvent",
    "WAWebErrorBoundary.react",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = "META_AI_OPEN_GROUP_NUX_ENTERED_GROUPS",
      _ = "meta_ai_open_group_nux_missing_notice_id",
      f = null,
      g = !1,
      h = new Set(),
      y = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebMetaAiOpenGroupNuxModal.react",
        )
          .__setRef("WAWebMetaAiOpenGroupNux")
          .load();
      }, "MetaAiOpenGroupNuxModal");
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield v(e),
            yield o(
              "WAWebGroupAgentNonInitiatorNux",
            ).maybeShowGroupAgentNonInitiatorNux(e));
        })),
        b.apply(this, arguments)
      );
    }
    function v(t, a) {
      if (f != null) return f;
      if (!R(t)) return (c || (c = n("Promise"))).resolve();
      var i = Number(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId());
      if (h.has(i)) return (c || (c = n("Promise"))).resolve();
      var l = L(i, a)
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[MetaAiOpenGroupNux] failed to show the NUX",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("meta-ai-open-group-nux-failed");
        })
        .finally(function () {
          f === l && (f = null);
        });
      return ((f = l), l);
    }
    function S(e) {
      var t = e.id.toString();
      return D().includes(t)
        ? (c || (c = n("Promise"))).resolve()
        : v(e, function () {
            return x(t);
          });
    }
    function R(e) {
      var t;
      return !e.id.isGroup() ||
        ((t = e.groupMetadata) == null ? void 0 : t.isOpenBotGroup) !== !0 ||
        !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
        ? !1
        : o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() == null
          ? (T(), !1)
          : !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice();
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (yield o("WAWebBotTos").refreshMetaAiOpenGroupNotice(),
            !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice() &&
              (yield k(e)))
          ) {
            var r = yield y();
            (yield o("WAWebModalManager").ModalManager.existsAsync()) ||
              (yield new (c || (c = n("Promise")))(function (n) {
                var a = function (t) {
                  (n(), o("WAWebModalManager").closeModalManager());
                };
                (o("WAWebModalManager").ModalManager.open(
                  m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    fallback: o("WAWebNullFunc").returnNull,
                    name: "meta-ai-open-group-nux",
                    onError: a,
                    children: m.jsx(r, { noticeId: e, onClosed: n }),
                  }),
                ),
                  t == null || t());
              }));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (
              (yield o(
                "WAWebUserDisclosureCollection",
              ).UserDisclosureCollection.find(e.toString())) != null
            )
              return !0;
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaAiOpenGroupNux] notice ",
                    " failed to load",
                  ])),
                e,
              )
              .sendLogs("meta-ai-open-group-nux-notice-load-failed");
          } catch (t) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaAiOpenGroupNux] notice ",
                    " failed to load",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("meta-ai-open-group-nux-notice-load-failed");
          }
          return (h.add(e), !1);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      g ||
        ((g = !0),
        new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: _,
        }).commit());
    }
    function D() {
      var e = r("WAWebUserPrefsStore").getUser(p);
      return Array.isArray(e)
        ? e.filter(function (e) {
            return typeof e == "string";
          })
        : [];
    }
    function x(e) {
      var t = D();
      t.includes(e) || r("WAWebUserPrefsStore").setUser(p, [].concat(t, [e]));
    }
    ((l.maybeShowGroupAgentNuxes = C),
      (l.maybeShowMetaAiOpenGroupNux = v),
      (l.maybeShowMetaAiOpenGroupNuxAtFirstEntry = S),
      (l.isMetaAiOpenGroupNuxOwed = R));
  },
  98,
);
