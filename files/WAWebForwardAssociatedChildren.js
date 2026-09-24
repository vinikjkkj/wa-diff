__d(
  "WAWebForwardAssociatedChildren",
  [
    "WALogger",
    "WAWebDualUploadsAssociationTypes",
    "WAWebForwardAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = [],
        r = [];
      for (var a of o(
        "WAWebMessageAssociationUIUtils",
      ).getHiddenAssociatedMessages(
        t.id,
        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
      )) {
        var i = a.associationType;
        if (i != null) {
          var l = o(
            "WAWebForwardAssociationConfig",
          ).getForwardAssociationConfig(i, e);
          if (l == null) {
            o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
              i,
            ) && r.push(i);
            continue;
          }
          n.push({ associationType: i, child: a, row: l });
        }
      }
      return { droppedPairedTypes: r, forwardable: n };
    }
    function c() {
      return !r("justknobx")._("5946");
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.children,
            a = t.droppedPairedTypes,
            i = t.forwardedParent,
            l = t.includeCaption,
            u = t.multicast,
            c = t.sendChild;
          if (i != null) {
            for (var d of a)
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[dual-uploads] dropped a paired child on forward: ",
                      "",
                    ])),
                  String(d),
                )
                .sendLogs("dual-uploads-forward-child-dropped", {
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
                });
            for (var m of r) {
              var p = m.associationType,
                _ = m.child,
                f = m.row;
              c({
                chat: n,
                msg: _,
                multicast: u,
                includeCaption: l,
                pairedMediaType:
                  i.pairedMediaType != null && f.role === "shadow"
                    ? _.pairedMediaType
                    : void 0,
                associationOptions: {
                  parentMsgKey: i.id,
                  associationType: p,
                  viewMode: f.viewMode,
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
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getForwardableAssociatedChildren = u),
      (l.areForwardPairLabelsEnabled = c),
      (l.forwardAssociatedChildren = d));
  },
  98,
);
