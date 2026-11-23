__d(
  "WASmaxAppdataDeliverPeerRPC",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "appdata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "push_priority",
        D,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!s.success) return s;
      var g = p(n.value);
      if (!g.success) return g;
      var h = d(n.value),
        y = m(n.value);
      if (!y.success) return y;
      var C = c(e),
        b = u(e),
        v = f(e),
        S = _(e);
      return o("WAResultOrError").makeResult({
        id: r.value,
        category: a.value,
        pushPriority: i.value,
        from: l.value,
        t: s.value,
        encEncVersionFutureproofMixin: g.value,
        encEncRetryMixin: h.success ? h.value : null,
        encEncTypeIndividualMixin: y.value,
        deviceIdentityMixin: C.success ? C.value : null,
        registrationIDMixin: b.success ? b.value : null,
        offlineMixin: v.success ? v.value : null,
        internalTestMixin: S.success ? S.value : null,
      });
    }
    function u(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "registration");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 4, 4);
      return n.success
        ? o("WAResultOrError").makeResult({ registrationElementValue: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "device-identity");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            deviceIdentityElementValue: n.value,
          })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 1, 4);
      return n.success
        ? o("WAResultOrError").makeResult({ count: n.value })
        : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "type", x);
      if (!n.success) return n;
      var r = g(e),
        a = y(e);
      if (!a.success) return a;
      var i = C(e),
        l = h(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            type: n.value,
            encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
          },
          a.value,
          {
            encStateOrSessionTypeMixinGroup: i.success ? i.value : null,
            encMediaTypeOrListMixinGroup: l.success ? l.value : null,
          },
        ),
      );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "v", 3, void 0);
      return n.success ? o("WAResultOrError").makeResult({ v: n.value }) : n;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "test");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "config",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ testConfig: n.value })
        : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").attrIntRange(e, "offline", 0, 12);
      return t.success
        ? o("WAResultOrError").makeResult({ offline: t.value })
        : t;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "decrypt-fail",
        "hide",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ decryptFail: n.value })
        : n;
    }
    function h(e) {
      var t = v(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncMediaType",
          value: t.value,
        });
      var n = b(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "EncList", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncMediaType", "EncList"],
            [t, n],
          );
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 1048576);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function C(e) {
      var t = R(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncState",
          value: t.value,
        });
      var n = S(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncSessionType",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncState", "EncSessionType"],
            [t, n],
          );
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "list",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "native_flow_name",
        I,
      );
      if (!n.success) return n;
      var r = L(e);
      if (!r.success) return r;
      var a = E(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ nativeFlowName: n.value }, r.value, {
          avatarStickerTypeMixin: a.success ? a.value : null,
        }),
      );
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "session_type",
        "pq",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ sessionType: n.value })
        : n;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "state", T);
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "mediatype", k);
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "sticker_type",
        "avatar",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ stickerType: n.value })
        : n;
    }
    var k = {
        "1p_sticker": "1p_sticker",
        audio: "audio",
        avatar_sticker: "avatar_sticker",
        buttons_response: "buttons_response",
        cataloglink: "cataloglink",
        chat_theme: "chat_theme",
        collection: "collection",
        contact: "contact",
        contact_array: "contact_array",
        document: "document",
        feed_reshare: "feed_reshare",
        genai_sticker: "genai_sticker",
        gif: "gif",
        group_history: "group_history",
        history: "history",
        image: "image",
        instant_image: "instant_image",
        list_response: "list_response",
        location: "location",
        motion_photo: "motion_photo",
        motion_video: "motion_video",
        music: "music",
        native_flow_response: "native_flow_response",
        order: "order",
        product: "product",
        productlink: "productlink",
        ptt: "ptt",
        ptv: "ptv",
        request_location: "request_location",
        request_location_update: "request_location_update",
        sticker: "sticker",
        sticker_pack: "sticker_pack",
        story_reply: "story_reply",
        url: "url",
        user_created_sticker: "user_created_sticker",
        vcard: "vcard",
        video: "video",
        xma: "xma",
      },
      I = {
        a2ui_reply_action: "a2ui_reply_action",
        account_authentication_request: "account_authentication_request",
        address_message: "address_message",
        api_signup: "api_signup",
        call_permission_request: "call_permission_request",
        form_message: "form_message",
        galaxy_message: "galaxy_message",
        menu_options: "menu_options",
      },
      T = { false: "false", true: "true" },
      D = { high: "high", low: "low" },
      x = { msg: "msg", pkmsg: "pkmsg" };
    ((l.receivePeerRPC = e),
      (l.parsePeerRequest = s),
      (l.ENUM_1PSTICKER_AUDIO_AVATARSTICKER_BUTTONSRESPONSE_CATALOGLINK_CHATTHEME_COLLECTION_CONTACT_CONTACTARRAY_DOCUMENT_FEEDRESHARE_GENAISTICKER_GIF_GROUPHISTORY_HISTORY_IMAGE_INSTANTIMAGE_LISTRESPONSE_LOCATION_MOTIONPHOTO_MOTIONVIDEO_MUSIC_NATIVEFLOWRESPONSE_ORDER_PRODUCT_PRODUCTLINK_PTT_PTV_REQUESTLOCATION_REQUESTLOCATIONUPDATE_STICKER_STICKERPACK_STORYREPLY_URL_USERCREATEDSTICKER_VCARD_VIDEO_XMA =
        k),
      (l.ENUM_A2UIREPLYACTION_ACCOUNTAUTHENTICATIONREQUEST_ADDRESSMESSAGE_APISIGNUP_CALLPERMISSIONREQUEST_FORMMESSAGE_GALAXYMESSAGE_MENUOPTIONS =
        I),
      (l.ENUM_FALSE_TRUE = T),
      (l.ENUM_HIGH_LOW = D),
      (l.ENUM_MSG_PKMSG = x));
  },
  98,
);
