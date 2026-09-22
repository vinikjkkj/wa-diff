__d(
  "WAWebSendHdImagePair",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAttachMediaModel",
    "WAWebDualUploadsSendPolicy",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      var r, a, i;
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE ||
        n.associationType != null ||
        n.isViewOnce === !0 ||
        t.quality !== o("WAWebAttachMediaModel").MediaQuality.HD ||
        !t.hdEligible ||
        t.originalAttachment == null
      )
        return !1;
      var l =
          (r = t.metadataByQuality) == null
            ? void 0
            : r.get(o("WAWebAttachMediaModel").MediaQuality.Standard),
        s =
          (a = t.metadataByQuality) == null
            ? void 0
            : a.get(o("WAWebAttachMediaModel").MediaQuality.HD);
      return l == null ||
        s == null ||
        !o("WAWebDualUploadsSendPolicy").isHdChildBetterThanParent(l, s)
        ? !1
        : o("WAWebDualUploadsSendPolicy").isChatEligibleForHdImagePair(
            e.id,
            (i = e.contact) == null ? void 0 : i.businessProfile,
          );
    }
    function m(e) {
      var t = e.chat,
        n = e.childPrep,
        a = e.fileOrigin,
        i = e.options,
        l = e.parentPlaceholderProps,
        s = e.source,
        u = o("WAWebMedia").prepRawMedia(
          s.then(function (e) {
            var t = e.file;
            return r("WAWebMediaOpaqueData").createFromData(t, t.type);
          }),
          {
            fileOrigin: a,
            maxDimension:
              o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
          },
        ),
        c = u.sendToChat({
          chat: t,
          options: babelHelpers.extends({}, i, {
            addEvenWhilePreparing: !0,
            fileOrigin: a,
            pairedMediaType: "SD_IMAGE_PARENT",
            placeholderProps: l,
          }),
        });
      p({ chat: t, childPrep: n, fileOrigin: a, options: i, parentSend: c });
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            d = t.chat,
            m = t.childPrep,
            p = t.fileOrigin,
            _ = t.options,
            f = t.parentSend,
            g;
          try {
            g = yield f;
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] parent send failed, dropping the HD child",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("dual-uploads-send-parent-failed");
            return;
          }
          var h = (n = g) == null || (n = n.msg) == null ? void 0 : n.id;
          if (
            h == null ||
            ((a = g) == null ? void 0 : a.messageSendResult) !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
          ) {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] parent send did not land, dropping the HD child",
                  ])),
              )
              .sendLogs("dual-uploads-send-parent-not-acked");
            return;
          }
          var y;
          try {
            y = yield m.sendToChat({
              chat: d,
              options: {
                addEvenWhilePreparing: _.addEvenWhilePreparing,
                associationType: o("WAWebMessageAssociation.flow")
                  .MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
                botPersonaId: _.botPersonaId,
                fileOrigin: p,
                pairedMediaType: "HD_IMAGE_CHILD",
                parentMsgKey: h,
                threadId: _.threadId,
                type: o("WAWebMsgType").MSG_TYPE.IMAGE,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              },
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] HD child send failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("dual-uploads-send-child-failed");
            return;
          }
          ((i = y) == null ? void 0 : i.messageSendResult) !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] HD child send did not land: ",
                    "",
                  ])),
                String((l = y) == null ? void 0 : l.messageSendResult),
              )
              .sendLogs("dual-uploads-send-child-not-acked", {
                sampling: 0.01,
                sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
              });
        })),
        _.apply(this, arguments)
      );
    }
    ((l.shouldSendAsHdImagePair = d), (l.sendHdImagePair = m));
  },
  98,
);
