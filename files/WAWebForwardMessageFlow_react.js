__d(
  "WAWebForwardMessageFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebDrawerViewType",
    "WAWebFindChatAction",
    "WAWebForwardMessageModal.react",
    "WAWebForwardMessagesToChat",
    "WAWebModal.react",
    "WAWebNewGroupFlowLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useState,
      g = 3e3;
    function h(t) {
      return t.msgs.some(function (e) {
        return e.type === "gp2" && e.subtype === "create";
      })
        ? (c || (c = n("Promise"))).resolve()
        : new (c || (c = n("Promise")))(function (n) {
            var r = function (o) {
                o.type === "gp2" &&
                  o.subtype === "create" &&
                  (t.msgs.off("add", r), window.clearTimeout(a), n());
              },
              a = window.setTimeout(function () {
                (t.msgs.off("add", r),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[forward-to-new-group] context card wait timed out",
                        ])),
                    )
                    .sendLogs("forward-to-new-group-context-card-timeout"),
                  n());
              }, g);
            t.msgs.on("add", r);
          });
    }
    var y = n("$InternalEnum").Mirrored(["FORWARD_SELECT", "NEW_GROUP_FLOW"]);
    function C(e) {
      var t = e.getAnnouncementSummary,
        a = e.msgs,
        i = e.onBack,
        l = e.onClose,
        c = e.onForward,
        d = f(y.FORWARD_SELECT),
        p = d[0],
        g = d[1],
        C = _(function () {
          g(y.NEW_GROUP_FLOW);
        }, []),
        b = _(function () {
          g(y.FORWARD_SELECT);
        }, []),
        v = _(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield e;
                if (t != null)
                  try {
                    var n = yield o(
                        "WAWebFindChatAction",
                      ).findOrCreateLatestChat(t, "forwardSelectedModals"),
                      r = n.chat;
                    (yield h(r),
                      l(),
                      yield o(
                        "WAWebForwardMessagesToChat",
                      ).forwardMessagesToChats({
                        msgs: [].concat(a),
                        chats: [r],
                        includeCaption: !0,
                      }),
                      c == null || c([].concat(a)));
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[forward-to-new-group] fwd msgs failed",
                          ])),
                      )
                      .sendLogs("forward-to-new-group-error"),
                      l());
                  }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [a, l, c],
        );
      return p === y.NEW_GROUP_FLOW
        ? m.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            children: m.jsx(
              o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable,
              {
                viewType: r("WAWebDrawerViewType").MODAL,
                onCreateGroup: v,
                onEnd: b,
                participantsDrawerTitle: s._(/*BTDS*/ "Send to new group"),
              },
            ),
          })
        : m.jsx(r("WAWebForwardMessageModal.react"), {
            msgs: a,
            onClose: l,
            onBack: i,
            onForward: c,
            onNewGroupClick: C,
            getAnnouncementSummary: t,
          });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
