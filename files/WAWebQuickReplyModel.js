__d(
  "WAWebQuickReplyModel",
  [
    "WAWebBaseModel",
    "WAWebBizQuickReplyBridge",
    "WAWebFrontendQuickReplyGetters",
    "WAWebPixQuickReplyFeature",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.shortcut = o("WAWebBaseModel").prop()),
          (t.message = o("WAWebBaseModel").prop()),
          (t.count = o("WAWebBaseModel").prop()),
          (t.keywords = o("WAWebBaseModel").prop()),
          (t.pendingCount = o("WAWebBaseModel").session(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.useOnce = function () {
          this.isSmartDefault()
            ? ((this.count += 1),
              o("WAWebBizQuickReplyBridge").updateQuickReply(this))
            : (this.pendingCount += 1);
        }),
        (n.isSmartDefault = function () {
          switch (o("WAWebQuickReplyGetters").getType(this)) {
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
            case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
            case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
              return !0;
            default:
              return !1;
          }
        }),
        (n.hideForChat = function (t) {
          switch (o("WAWebQuickReplyGetters").getType(this)) {
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
              return !o(
                "WAWebPixQuickReplyFeature",
              ).shouldShowPixQuickReplyForChat(t);
            default:
              return !1;
          }
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebQuickReplyGetters").clearQuickReplyGetterCacheFor(this),
            o(
              "WAWebFrontendQuickReplyGetters",
            ).clearFrontendQuickReplyGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "quickReply";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
