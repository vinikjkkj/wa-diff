__d(
  "WAWebForwardAssociatedChildren",
  [
    "WALogger",
    "WAWebDualUploadsAssociationTypes",
    "WAWebForwardAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.forwardedParentMsgId,
            a = t.includeCaption,
            i = t.multicast,
            l = t.originalMsg,
            u = t.sendChild;
          if (r != null) {
            var c = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(
              l.id,
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            );
            for (var d of c) {
              var m = d.associationType;
              if (m != null) {
                var p = o(
                  "WAWebForwardAssociationConfig",
                ).getForwardAssociationConfig(m);
                if (p == null) {
                  o(
                    "WAWebDualUploadsAssociationTypes",
                  ).isDualUploadAssociationType(m) &&
                    o("WALogger")
                      .LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[dual-uploads] dropped a paired child on forward: ",
                            "",
                          ])),
                        String(m),
                      )
                      .sendLogs("dual-uploads-forward-child-dropped", {
                        sampling: 0.01,
                        sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
                      });
                  continue;
                }
                u({
                  chat: n,
                  msg: d,
                  multicast: i,
                  includeCaption: a,
                  associationOptions: {
                    parentMsgKey: r,
                    associationType: p.associationType,
                    viewMode: p.viewMode,
                  },
                }).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[chat forward message] error forwarding associated child",
                        ])),
                    )
                    .sendLogs("forward-associated-child-fail");
                });
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.maybeForwardAssociatedChildren = u;
  },
  98,
);
