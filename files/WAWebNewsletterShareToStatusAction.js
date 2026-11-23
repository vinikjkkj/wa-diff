__d(
  "WAWebNewsletterShareToStatusAction",
  [
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebIncrementNewsletterForwardCounterAction",
    "WAWebLogNewsletterMessageForward",
    "WAWebLogStatusPosterActions",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterShareToStatusMedia",
    "WAWebNewsletterShareToStatusQPLScope.react",
    "WAWebNewsletterShareToStatusToast",
    "WAWebStatusJidUtils",
    "WAWebStatusPosterActionsLogger",
    "WAWebStatusPostingMediaView.react",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWidFactory",
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
      p = new Set();
    function _(e, t, n) {
      return (
        n === void 0 && (n = null),
        o("WAWebNewsletterShareToStatusMedia").makesCardVideo(e)
          ? f(e, t, n)
          : g(e, t, n)
      );
    }
    async function f(e, t, n) {
      var r = e.id.toString();
      if (p.has(r)) {
        t.logCancelled();
        return;
      }
      p.add(r);
      var a = null;
      try {
        ((a = o(
          "WAWebNewsletterShareToStatusToast",
        ).showPreparingStatusToast()),
          await g(e, t, n));
      } finally {
        (p.delete(r), a == null || a());
      }
    }
    async function g(t, n, a) {
      var i =
          a != null ? o("WAWebWidFactory").asNewsletterWidOrThrow(a.id) : null,
        l = o("WAWebLogStatusPosterActions").createStatusPostingSessionId();
      o("WAWebStatusPosterActionsLogger").logStatusEntrypointTap(
        o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT
          .CHANNEL_POST,
        l,
        i != null ? i : void 0,
      );
      try {
        var s = await o("WAWebNewsletterShareToStatusMedia").loadStatusShare(
          t,
          n,
        );
        if (s == null) {
          (n.logFailed(),
            o(
              "WAWebNewsletterShareToStatusToast",
            ).showShareToStatusFailedToast());
          return;
        }
        h({
          channel: a,
          channelWid: i,
          msg: t,
          qplLogger: n,
          share: s,
          statusPostingSessionId: l,
        });
      } catch (t) {
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-share-to-status] could not open the status composer",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("newsletter-share-to-status-failed"),
          n.logFailed(),
          o(
            "WAWebNewsletterShareToStatusToast",
          ).showShareToStatusFailedToast());
      }
    }
    function h(e) {
      var t = e.channel,
        n = e.channelWid,
        a = e.msg,
        i = e.qplLogger,
        l = e.share,
        c = l.attachment,
        d = l.cardTapAreas,
        p = e.statusPostingSessionId,
        _ = o("WAWebStatusJidUtils").getStatusChat(),
        f = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: _.getParticipantCount(),
        });
      _.setAttachMediaContents(f);
      var g,
        h = function () {
          var e;
          (f
            .processAttachmentsForChat(
              [c],
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .FORWARD,
              _,
            )
            .catch(function (e) {
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-share-to-status] could not prepare the update media in the status composer",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("newsletter-share-to-status-processing-failed"),
                o(
                  "WAWebNewsletterShareToStatusToast",
                ).showShareToStatusFailedToast());
            }),
            (g = (e = f.head()) == null ? void 0 : e.id),
            i.logComposerOpened(d != null));
        },
        b = function (n, i) {
          C({
            attachment: c,
            destinationChat: t != null ? t : _,
            msg: a,
            postedMedia: i,
          }).catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-share-to-status] could not count the posted status as a forward of the update",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("newsletter-share-to-status-count-failed");
          });
        },
        v = d == null ? a.caption : null,
        S = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForNewsletterMsg(a);
      o("WAWebModalManager").ModalManager.openMedia(
        m.jsx(r("WAWebNewsletterShareToStatusQPLScope.react"), {
          qplLogger: i,
          children: m.jsx(r("WAWebStatusPostingMediaView.react"), {
            allowMultipleMedia: !1,
            chat: _,
            entryPoint: o("WAWebLogStatusPosterActions")
              .STATUS_CREATION_ENTRY_POINT.CHANNEL_POST,
            forwardedNewsletterMessageInfo: S,
            getInteractiveAnnotations: y(d, function () {
              return g;
            }),
            initCaption: v != null && v !== "" ? { text: v } : null,
            isForwarded: !0,
            isNewsletterStatus: n != null,
            mediaCollection: f,
            newsletterWid: n != null ? n : void 0,
            onRender: h,
            onStatusPosted: b,
            statusAttributions: o(
              "WAWebNewsletterShareToStatusMedia",
            ).getChannelAttributions(S),
            statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
              .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
            statusPosterActionsLogger: new (o(
              "WAWebStatusPosterActionsLogger",
            ).StatusPosterActionsLogger)(
              p,
              n != null ? n : void 0,
              o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT
                .CHANNEL_POST,
            ),
          }),
        }),
        { transition: "status-modal" },
      );
    }
    function y(e, t) {
      if (e != null)
        return function (n) {
          return n.id === t() && !n.isCropped && !n.isRotated ? e : null;
        };
    }
    async function C(e) {
      var t = e.attachment,
        n = e.destinationChat,
        r = e.msg,
        a = e.postedMedia,
        i = await b(a);
      (i == null ? void 0 : i.file) === t.file &&
        (o(
          "WAWebIncrementNewsletterForwardCounterAction",
        ).incrementNewsletterForwardCounter(r, n),
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterMessageForwardLoggingEnabled() &&
          o("WAWebLogNewsletterMessageForward").logNewsletterMessageForward(r, [
            n,
          ]));
    }
    async function b(e) {
      try {
        return await e.provenanceSourceAttachment;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not read which file the posted status came from",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-share-to-status-posted-source-failed"),
          null
        );
      }
    }
    l.default = _;
  },
  98,
);
