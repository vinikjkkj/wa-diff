__d(
  "WAWebChatMsgsCollection",
  [
    "invariant",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebBizSystemMsgSubtypes",
    "WAWebChatMsgsCollectionComparator",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.noEarlierMsgs = o("WAWebBaseModel").prop()),
          (t.isLoadingEarlierMsgs = o("WAWebBaseModel").prop()),
          (t.isLoadingRecentMsgs = o("WAWebBaseModel").prop()),
          (t.isLoadingAroundMsgs = o("WAWebBaseModel").prop()),
          (t.isRepairingMsgHistory = o("WAWebBaseModel").prop()),
          (t.contextLoaded = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "msgLoad";
    var u = o("WAWebBaseModel").defineModel(e),
      c = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.threadId = null),
            (t.triggerChangeLast = function (e, n, r) {
              var o = t.last();
              if (t.$ChatMsgsCollection$p_1 !== o) {
                t.$ChatMsgsCollection$p_1 = o;
                var a = !1,
                  i = !!r.add,
                  l = !!r.remove;
                (e != null && n.includes(e) && i && !l && (a = !0),
                  t.trigger("change:last", o, a));
              }
            }),
            (t.msgLoadState = new u({
              noEarlierMsgs: !1,
              isLoadingEarlierMsgs: !1,
              isLoadingRecentMsgs: !1,
              isLoadingAroundMsgs: !1,
              contextLoaded: !1,
              isRepairingMsgHistory: !1,
            })),
            t.listenTo(t, "add remove", t.triggerChangeLast),
            t.listenTo(t, "sort reset", function (e, n) {
              t.triggerChangeLast(null, e, n != null ? n : {});
            }),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.delete = function () {
            (this.stopListening(),
              e.prototype.delete.call(this),
              this.msgLoadState.delete());
          }),
          (n.last = function () {
            return e.prototype.getModelsArray.call(this).findLast(function (e) {
              return o("WAWebViewModeUtils").isMessageExistingInChat(e);
            });
          }),
          (n.add = function (n, r) {
            var t = this,
              a;
            Array.isArray(n) ? n.length === 1 && (a = n[0]) : (a = n);
            var i = [];
            if (
              a != null &&
              (o("WAWebMsgGetters").getIsInitialE2ENotification(a) ||
                o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(a))
            ) {
              var l = this.some(function (e) {
                return o("WAWebMsgGetters").getIsInitialE2ENotification(e);
              });
              if (
                (o("WAWebMsgGetters").getIsInitialE2ENotification(a) &&
                  (l ||
                    (i = e.prototype.add.call(
                      this,
                      n,
                      babelHelpers.extends({}, r, { at: 0 }),
                    ))),
                o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(a))
              ) {
                var s = this.some(function (e) {
                  return o(
                    "WAWebMsgGetters",
                  ).getIsDisappearingModeSystemMessage(e);
                });
                if (!s) {
                  var u = l ? 1 : 0;
                  i = e.prototype.add.call(
                    this,
                    n,
                    babelHelpers.extends({}, r, { at: u }),
                  );
                }
              }
              i && this.trigger("insert_msgs", i, r);
            } else {
              var c,
                d = a != null ? o("WAWebMsgGetters").getSubtype(a) : null,
                m =
                  d != null &&
                  o("WAWebBizSystemMsgSubtypes").COEX_MSG_SUBTYPES.includes(
                    d,
                  ) &&
                  ((c = this.last()) == null ? void 0 : c.subtype) === d;
              m || (i = e.prototype.add.call(this, n, r));
            }
            if (i.length > 0) {
              var p = o("WAWebMsgCollection").MsgCollection.add(
                i.filter(Boolean),
                r,
              );
              (p.forEach(function (e) {
                e && t.isModel(e) && e.setMsgChunk(t, t.threadId);
              }),
                this.trigger("bulk_add", i, r));
            }
            return i;
          }),
          (n.remove = function (n, r, o) {
            (r === void 0 && (r = {}), o === void 0 && (o = !1));
            var t = e.prototype.remove.call(this, n, r),
              a = r ? r.silent : !1,
              i = t.filter(function (e) {
                return !!e;
              });
            return (
              i.length &&
                a !== !0 &&
                (this.trigger("remove_msgs", i, r),
                o || this.trigger("update_sort_time")),
              t
            );
          }),
          (n.replace = function (t) {
            var e = this;
            ((this.msgLoadState = t.msgLoadState),
              (this.loadRecentPromise = t.loadRecentPromise),
              (this.loadEarlierPromise = t.loadEarlierPromise),
              (this.loadAroundPromise = t.loadAroundPromise));
            var n = t.getModelsArray();
            (this.set(n, { silent: !0, merge: !1 }),
              n.forEach(function (t) {
                e.isModel(t) && t.setMsgChunk(e, e.threadId);
              }),
              this.trigger("bulk_add", n));
          }),
          (n.onMsgLoadStateChange = function (t) {
            var e = this,
              n,
              r = function () {
                t();
              },
              o = function () {
                (n != null || s(0, 56282), n.off("change", r));
                var o = e.msgLoadState;
                (o.on("change", r), (n = o), t());
              };
            ((n = this.msgLoadState),
              n.on("change", r),
              this.on("bulk_add", o));
            var a = function () {
              (n != null || s(0, 56281),
                e.off("bulk_add", o),
                n.off("change", r));
            };
            return function () {
              var e = a;
              e && ((a = null), e());
            };
          }),
          t
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((c.model = o("WAWebMsgModel").Msg),
      (c.comparator = o("WAWebChatMsgsCollectionComparator").msgComparator),
      (l.ChatMsgsCollection = c));
  },
  98,
);
