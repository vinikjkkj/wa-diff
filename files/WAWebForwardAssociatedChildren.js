__d(
  "WAWebForwardAssociatedChildren",
  [
    "WALogger",
    "WAWebDualUploadsAssociationTypes",
    "WAWebMessageAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
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
            "WAWebMessageAssociationConfig",
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
    function p() {
      return !r("justknobx")._("5946");
    }
    function _(e) {
      var t;
      return {
        businessProfile: (t = e.contact) == null ? void 0 : t.businessProfile,
        chatWid: e.id,
      };
    }
    function f(e) {
      return e.some(function (e) {
        var t = e.child,
          n = e.row;
        return n.role === "shadow" && t.pairedMediaType != null;
      });
    }
    async function g(e) {
      var t = e.chat,
        n = e.children,
        r = e.droppedPairedTypes,
        o = e.forwardedParent,
        a = e.includeCaption,
        i = e.multicast,
        l = e.sendChild;
      o != null &&
        (await h({
          chat: t,
          depth: 1,
          droppedPairedTypes: r,
          forwardable: n,
          forwardedParent: o,
          includeCaption: a,
          multicast: i,
          sendChild: l,
        }));
    }
    async function h(t) {
      var n = t.chat,
        r = t.depth,
        a = t.droppedPairedTypes,
        i = t.forwardable,
        l = t.forwardedParent,
        u = t.includeCaption,
        c = t.multicast,
        d = t.sendChild;
      for (var m of a)
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[dual-uploads] dropped a paired child on forward: ",
              "",
            ])),
          String(m),
        );
      await Promise.all(
        i.map(function (e) {
          return y({
            chat: n,
            depth: r,
            entry: e,
            forwardedParent: l,
            includeCaption: u,
            multicast: c,
            sendChild: d,
          }).catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error forwarding a child's subtree",
                  ])),
              )
              .sendLogs("forward-associated-subtree-fail");
          });
        }),
      );
    }
    async function y(e) {
      var t,
        n = e.chat,
        r = e.depth,
        a = e.entry,
        i = e.forwardedParent,
        l = e.includeCaption,
        s = e.multicast,
        d = e.sendChild,
        g = a.associationType,
        y = a.child,
        S = a.row,
        R = v;
      if (r < b)
        try {
          R = m(_(n), y);
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat forward message] error resolving a forwarded child's descendants",
                ])),
            )
            .sendLogs("forward-associated-descendants-fail");
        }
      var L =
          S.role === "shadow" ? i.pairedMediaType != null : f(R.forwardable),
        E = L && p() ? y.pairedMediaType : void 0,
        k;
      try {
        k = await d({
          chat: n,
          msg: y,
          multicast: s,
          includeCaption: l,
          pairedMediaType: E,
          associationOptions: {
            parentMsgKey: i.id,
            associationType: g,
            viewMode: S.viewMode,
          },
        });
      } catch (e) {
        (o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[chat forward message] error forwarding associated child",
              ])),
          )
          .sendLogs("forward-associated-child-fail"),
          C(R.forwardable.length));
        return;
      }
      var I = (t = k) == null ? void 0 : t.msg;
      if (I == null) {
        C(R.forwardable.length);
        return;
      }
      await h({
        chat: n,
        depth: r + 1,
        droppedPairedTypes: R.droppedPairedTypes,
        forwardable: R.forwardable,
        forwardedParent: I,
        includeCaption: l,
        multicast: s,
        sendChild: d,
      });
    }
    function C(e) {
      e !== 0 &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[chat forward message] dropped ",
              " direct descendant(s) of a child that produced no message",
            ])),
          e,
        );
    }
    var b = 2,
      v = { droppedPairedTypes: [], forwardable: [] };
    ((l.getForwardableAssociatedChildren = m),
      (l.areForwardPairLabelsEnabled = p),
      (l.getForwardDestination = _),
      (l.carriesForwardableShadow = f),
      (l.forwardAssociatedChildren = g));
  },
  98,
);
