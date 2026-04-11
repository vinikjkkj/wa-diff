__d(
  "WAWebMediaMsgRegistration",
  [
    "Promise",
    "WALogger",
    "WAWebConsolidateMediaUpdate",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebWamEnumWebcRmrReasonCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        "change:ack " +
        o("WAWebMediaTypes")
          .MEDIA_MSG_PROPS.map(function (e) {
            return "change:" + e;
          })
          .join(" ");
    function d(e) {
      o("WAWebConsolidateMediaUpdate").consolidateMediaUpdate(
        e,
        o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_UPDATE,
      );
    }
    function m(e) {
      e.off(null, d);
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromMsg(t, e);
    }
    function p(e) {
      (!e.mimetype &&
        e.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE &&
        (e.mimetype = "image/jpeg"),
        !e.mimetype &&
          e.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
          (e.mimetype = "image/webp"),
        e.on(c, d),
        o("WAWebConsolidateMediaUpdate").consolidateMediaUpdate(
          e,
          o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_INIT,
        ));
    }
    function _(t, n) {
      t.isUnsentPhoneMsg() &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                "",
              ])),
            t.id.toString(),
            t.type,
          )
          .sendLogs("media-fault: registerMsgEarly msg without mediaObject");
      for (
        var r = {}, a = 0;
        a < o("WAWebMediaTypes").MEDIA_MSG_PROPS.length;
        a++
      ) {
        var i = o("WAWebMediaTypes").MEDIA_MSG_PROPS[a],
          l = n[i];
        r[i] = l !== void 0 ? l : t[i];
      }
      (!r.mimetype &&
        r.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE &&
        (n.mimetype = r.mimetype = "image/jpeg"),
        t.on(c, d),
        o("WAWebConsolidateMediaUpdate").consolidateMediaUpdateWithValues(
          t,
          r,
          o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_UPDATE,
        ));
      for (
        var s = {}, u = 0;
        u < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length;
        u++
      ) {
        var m = o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[u];
        s[m] = r[o("WAWebMediaTypes").MEDIA_TO_MSG[m]];
      }
      t.mediaData.set(s);
    }
    function f(e) {
      var t = e.mediaObject;
      if (t) return t.resolveWhenConsolidated();
      var a = e.mediaData;
      e.mediaData == null &&
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "prepareMsg: no media data v2. key: ",
              " type: ",
              " subtype: ",
              "",
            ])),
          e.id.toString(),
          e.type,
          e.subtype,
        );
      var i = a.preview;
      return i instanceof r("WAWebMediaOpaqueData") &&
        a.aspectRatio === void 0 &&
        (a.fullWidth === void 0 || a.fullHeight === void 0)
        ? o("WAWebMediaDataUtils")
            .getImageWidthHeight(i)
            .then(function (t) {
              var n = t.height,
                r = t.width;
              e.mediaObject || e.mediaData.set({ aspectRatio: r / n });
            })
        : (u || (u = n("Promise"))).resolve();
    }
    ((l.deregisterMsg = m),
      (l.registerMsg = p),
      (l.registerMsgEarly = _),
      (l.prepareMsg = f));
  },
  98,
);
