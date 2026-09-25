__d(
  "WAWebForwardAssociatedChildren",
  [
    "Promise",
    "WALogger",
    "WAWebDualUploadsAssociationTypes",
    "WAWebForwardAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
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
    function _() {
      return !r("justknobx")._("5946");
    }
    function f(e) {
      var t;
      return {
        businessProfile: (t = e.contact) == null ? void 0 : t.businessProfile,
        chatWid: e.id,
      };
    }
    function g(e) {
      return e.some(function (e) {
        var t = e.child,
          n = e.row;
        return n.role === "shadow" && t.pairedMediaType != null;
      });
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.children,
            r = e.droppedPairedTypes,
            o = e.forwardedParent,
            a = e.includeCaption,
            i = e.multicast,
            l = e.sendChild;
          o != null &&
            (yield C({
              chat: t,
              depth: 1,
              droppedPairedTypes: r,
              forwardable: n,
              forwardedParent: o,
              includeCaption: a,
              multicast: i,
              sendChild: l,
            }));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.depth,
            a = e.droppedPairedTypes,
            i = e.forwardable,
            l = e.forwardedParent,
            c = e.includeCaption,
            d = e.multicast,
            p = e.sendChild;
          for (var _ of a)
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[dual-uploads] dropped a paired child on forward: ",
                  "",
                ])),
              String(_),
            );
          yield (m || (m = n("Promise"))).all(
            i.map(function (e) {
              return v({
                chat: t,
                depth: r,
                entry: e,
                forwardedParent: l,
                includeCaption: c,
                multicast: d,
                sendChild: p,
              }).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat forward message] error forwarding a child's subtree",
                      ])),
                  )
                  .sendLogs("forward-associated-subtree-fail");
              });
            }),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.chat,
            r = e.depth,
            a = e.entry,
            i = e.forwardedParent,
            l = e.includeCaption,
            s = e.multicast,
            u = e.sendChild,
            m = a.associationType,
            h = a.child,
            y = a.row,
            b = E;
          if (r < L)
            try {
              b = p(f(n), h);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat forward message] error resolving a forwarded child's descendants",
                    ])),
                )
                .sendLogs("forward-associated-descendants-fail");
            }
          var v =
              y.role === "shadow"
                ? i.pairedMediaType != null
                : g(b.forwardable),
            S = v && _() ? h.pairedMediaType : void 0,
            k;
          try {
            k = yield u({
              chat: n,
              msg: h,
              multicast: s,
              includeCaption: l,
              pairedMediaType: S,
              associationOptions: {
                parentMsgKey: i.id,
                associationType: m,
                viewMode: y.viewMode,
              },
            });
          } catch (e) {
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error forwarding associated child",
                  ])),
              )
              .sendLogs("forward-associated-child-fail"),
              R(b.forwardable.length));
            return;
          }
          var I = (t = k) == null ? void 0 : t.msg;
          if (I == null) {
            R(b.forwardable.length);
            return;
          }
          yield C({
            chat: n,
            depth: r + 1,
            droppedPairedTypes: b.droppedPairedTypes,
            forwardable: b.forwardable,
            forwardedParent: I,
            includeCaption: l,
            multicast: s,
            sendChild: u,
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      t !== 0 &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[chat forward message] dropped ",
              " direct descendant(s) of a child that produced no message",
            ])),
          t,
        );
    }
    var L = 2,
      E = { droppedPairedTypes: [], forwardable: [] };
    ((l.getForwardableAssociatedChildren = p),
      (l.areForwardPairLabelsEnabled = _),
      (l.getForwardDestination = f),
      (l.carriesForwardableShadow = g),
      (l.forwardAssociatedChildren = h));
  },
  98,
);
