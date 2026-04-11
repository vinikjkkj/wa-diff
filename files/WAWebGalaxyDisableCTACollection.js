__d(
  "WAWebGalaxyDisableCTACollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebUserPrefsGalaxyDisableCTA",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseModel").BaseModel),
      y = o("WAWebBaseModel").defineModel(h),
      C = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.messageCollectionListener = null),
            e.initialize(),
            e.$GalaxyDisableCTACollectionImpl$p_1(),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this,
              t = o(
                "WAWebUserPrefsGalaxyDisableCTA",
              ).getGalaxyDisableCTAMessageIds();
            t.forEach(function (t) {
              var n = new y({ id: t });
              e.add(n);
            });
          }),
          (a.addMessageId = function (n) {
            if (this.get(n) == null) {
              var t = o("WAWebMsgCollection").MsgCollection.get(n);
              if (t)
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "GalaxyDisableCTACollection: found existing message for ID: ",
                      "",
                    ])),
                  n,
                ),
                  this.$GalaxyDisableCTACollectionImpl$p_2(t, n));
              else {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[GalaxyDisableCTACollection] queued msgId: ",
                      "",
                    ])),
                  n,
                );
                var r = new y({ id: n });
                (o(
                  "WAWebUserPrefsGalaxyDisableCTA",
                ).addGalaxyDisableCTAMessageId(n),
                  this.add(r));
              }
            }
          }),
          (a.addByAgmId = function (t, n) {
            var e = o("WAWebMsgCollection").MsgCollection.getModelsArray(),
              r = e.find(function (e) {
                var r, a;
                return (
                  e.type ===
                    o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
                  ((r = e.id) == null || (r = r.remote) == null
                    ? void 0
                    : r.toString()) === n &&
                  ((a = e.ctwaContext) == null ? void 0 : a.sourceId) === t
                );
              });
            r != null
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[GalaxyDisableCTACollection] found AGM by agmId: ",
                      "",
                    ])),
                  t,
                ),
                this.$GalaxyDisableCTACollectionImpl$p_2(r, r.id.toString()))
              : (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[GalaxyDisableCTACollection] AGM queued: ",
                      " ",
                      "",
                    ])),
                  t,
                  n,
                ),
                o("WAWebUserPrefsGalaxyDisableCTA").addGalaxyDisableCTAAgmEntry(
                  t,
                  n,
                ));
          }),
          (a.$GalaxyDisableCTACollectionImpl$p_1 = function () {
            var e = this;
            ((this.messageCollectionListener = function (t) {
              ((t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                t.interactiveType ===
                  r("WAWebInteractiveMessageType").NATIVE_FLOW &&
                t.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) ||
                (t.type ===
                  o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
                  t.ctwaContext != null)) &&
                e.$GalaxyDisableCTACollectionImpl$p_3();
            }),
              o("WAWebMsgCollection").MsgCollection.on(
                "add",
                this.messageCollectionListener,
              ));
          }),
          (a.$GalaxyDisableCTACollectionImpl$p_3 = function () {
            var e = this,
              t = [],
              n = 0;
            (this.forEach(function (r) {
              var a = r.id.toString(),
                i = o("WAWebMsgCollection").MsgCollection.get(a);
              i &&
                (n++,
                t.length < 3 && t.push(a),
                e.$GalaxyDisableCTACollectionImpl$p_2(i, a));
            }),
              n > 0 &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "GalaxyDisableCTACollection: found ",
                      " messages for IDs => ",
                      "",
                    ])),
                  n,
                  t,
                ));
            var r = o(
                "WAWebUserPrefsGalaxyDisableCTA",
              ).getGalaxyDisableCTAAgmEntries(),
              a = [],
              i = 0,
              l = function (n) {
                var t = o("WAWebMsgCollection").MsgCollection.getModelsArray(),
                  r = t.find(function (e) {
                    var t, r;
                    return (
                      e.type ===
                        o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
                      ((t = e.id) == null || (t = t.remote) == null
                        ? void 0
                        : t.toString()) === n.chatId &&
                      ((r = e.ctwaContext) == null ? void 0 : r.sourceId) ===
                        n.agmId
                    );
                  });
                r != null &&
                  (i++,
                  a.length < 3 && a.push(n.agmId),
                  e.$GalaxyDisableCTACollectionImpl$p_2(r, r.id.toString()),
                  o(
                    "WAWebUserPrefsGalaxyDisableCTA",
                  ).removeGalaxyDisableCTAAgmEntry(n.agmId));
              };
            for (var s of r) l(s);
            i > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[GalaxyDisableCTACollection] deferred AGM: ",
                    " => ",
                    "",
                  ])),
                i,
                a,
              );
          }),
          (a.$GalaxyDisableCTACollectionImpl$p_2 = function (t, n) {
            var e = this;
            try {
              if (t.galaxyFlowDisabled === !0) {
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[GalaxyDisableCTACollection] already updated, skip: ",
                      "",
                    ])),
                  n,
                ),
                  this.$GalaxyDisableCTACollectionImpl$p_4(n));
                return;
              }
              (t.set({ galaxyFlowDisabled: !0 }),
                t
                  .updateNFMButtonsState(!0)
                  .then(function (t) {
                    return e.$GalaxyDisableCTACollectionImpl$p_4(n);
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[GalaxyDisableCTACollection] NFM btn update failed: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[GalaxyDisableCTACollection] processed msgId: ",
                      "",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyDisableCTACollection: Error updating message state: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$GalaxyDisableCTACollectionImpl$p_4 = function (t) {
            var e = this.get(t);
            e &&
              (this.remove(e),
              o(
                "WAWebUserPrefsGalaxyDisableCTA",
              ).removeGalaxyDisableCTAMessageId(t));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    C.model = y;
    var b = new C();
    l.GalaxyDisableCTACollection = b;
  },
  98,
);
