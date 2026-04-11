__d(
  "WAWebAssociationProtoUtils",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiContact",
    "WAWebAssociationProcessor",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationValidation",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD,
      ],
      m = new Set([
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
          .STICKER_ANNOTATION,
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
          .POLL_ADD_OPTION,
      ]);
    function p(e) {
      var t = o("WAWebMessageAssociation.flow").MessageAssociationType.cast(
          o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.getName(
            e,
          ),
        ),
        n = r("justknobx")._("4912");
      return t != null && d.includes(t) && !n
        ? o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN
        : t != null
          ? t
          : o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN;
    }
    function _(e) {
      switch (e) {
        case o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .POLL_ADD_OPTION:
          throw r("err")("Invalid outgoing association type");
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_ALBUM:
          return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .MEDIA_ALBUM;
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .BOT_PLUGIN:
          return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .BOT_PLUGIN;
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_POLL:
          return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .MEDIA_POLL;
      }
    }
    function f(e, t) {
      if (!(e == null || t == null))
        return {
          messageAssociation: {
            associationType: _(e),
            parentMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(t),
          },
        };
    }
    function g(e, t, n) {
      var a = r("WAWebNewsletterIsNewsletterMsg")(t);
      return n === "history" && !a
        ? o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(e)
        : o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
            e,
            t,
          );
    }
    function h(e, t, n) {
      var a = g(e.parentMessageKey, t, n),
        i = p(e.associationType),
        l = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(i);
      if (l == null)
        throw new (o(
          "WAWebMessageAssociationValidation",
        ).MessageAssociationValidationError)(
          o("WAWebMessageAssociationValidation")
            .MessageAssociationValidationErrorCode.UNSUPPORTED_ASSOCIATION_TYPE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return {
        associationParentMsgKey: r("WANullthrows")(
          a,
          "associationParentMsgKey can't be null",
        ),
        associationType: i,
        viewMode: l.viewMode,
      };
    }
    function y(t, n, a, i) {
      var l = n == null ? void 0 : n.messageAssociation;
      if (
        l != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        if (a === "history_quoted" || a === "quoted") return null;
        var d = l.parentMessageKey,
          p = l.associationType;
        if (
          p ===
          o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .STATUS_NOTIFICATION
        )
          return null;
        if (d == null)
          throw new (o(
            "WAWebMessageAssociationValidation",
          ).MessageAssociationValidationError)(
            o("WAWebMessageAssociationValidation")
              .MessageAssociationValidationErrorCode.MISSING_PARENT_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (p == null)
          throw new (o(
            "WAWebMessageAssociationValidation",
          ).MessageAssociationValidationError)(
            o("WAWebMessageAssociationValidation")
              .MessageAssociationValidationErrorCode.MISSING_ASSOCIATION_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (a === "history") return { associationType: p, parentMessageKey: d };
        var _ = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(d, t);
        if (_ == null)
          throw new (o(
            "WAWebMessageAssociationValidation",
          ).MessageAssociationValidationError)(
            o("WAWebMessageAssociationValidation")
              .MessageAssociationValidationErrorCode.INVALID_PARENT_MESSAGE_KEY,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var f =
          _.fromMe === t.id.fromMe &&
          r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(
              _.remote,
              t.id.remote,
            ),
          ) &&
          r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(
              _.participant,
              t.id.participant,
            ),
          );
        if (!f && !m.has(p)) {
          var g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L,
            E,
            k = _.participant,
            I = t.id.participant,
            T = k != null && k.isLid() ? k : null,
            D = I != null && I.isLid() ? I : null,
            x = (g = i == null ? void 0 : i.length) != null ? g : 0,
            $ =
              T != null
                ? i == null
                  ? void 0
                  : i.find(function (e) {
                      return e.lid.equals(T);
                    })
                : null,
            P =
              D != null
                ? i == null
                  ? void 0
                  : i.find(function (e) {
                      return e.lid.equals(D);
                    })
                : null,
            N =
              k != null
                ? o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(k),
                  )
                : null,
            M =
              I != null
                ? o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(I),
                  )
                : null,
            w = o(
              "WAWebProtobufsE2E.pb",
            ).MessageAssociation$AssociationType.getName(p),
            A = _.remote.toLogString(),
            F = t.id.remote.toLogString(),
            O =
              (h = (y = _.participant) == null ? void 0 : y.toLogString()) !=
              null
                ? h
                : "null",
            B = (C = N == null ? void 0 : N.toLogString()) != null ? C : "null",
            W =
              (b = (v = t.id.participant) == null ? void 0 : v.toLogString()) !=
              null
                ? b
                : "null",
            q = (S = M == null ? void 0 : M.toLogString()) != null ? S : "null",
            U = (R = d.participant) != null ? R : "null",
            V = (L = t.type) != null ? L : "null",
            H = (E = t.subtype) != null ? E : "null",
            G =
              $ != null
                ? $.lid.toLogString() + " -> " + $.pn.toLogString()
                : "null",
            z =
              P != null
                ? P.lid.toLogString() + " -> " + P.pn.toLogString()
                : "null";
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[MsgAssoc] sender mismatch type=",
                  " pRemote=",
                  " bRemote=",
                  "",
                ])),
              w,
              A,
              F,
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MsgAssoc] pPart=",
                  " pPartAlt=",
                  " bPart=",
                  " bPartAlt=",
                  "",
                ])),
              O,
              B,
              W,
              q,
            ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[MsgAssoc] protoPart=",
                  " msgType=",
                  " subtype=",
                  " ctx=",
                  "",
                ])),
              U,
              V,
              H,
              a,
            ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[MsgAssoc] maps=",
                  " parentMap=",
                  " baseMap=",
                  "",
                ])),
              x,
              G,
              z,
            ),
            new (o(
              "WAWebMessageAssociationValidation",
            ).MessageAssociationValidationError)(
              o("WAWebMessageAssociationValidation")
                .MessageAssociationValidationErrorCode.MISMATCH_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .ERROR_PARENT_CHILD_SENDER_JID_MISMATCH,
            )
          );
        }
        return { associationType: p, parentMessageKey: d };
      }
      return null;
    }
    ((l.convertAssociationTypeFromProtoToClientSupportedAssociationType = p),
      (l.convertAssociationTypeFromClientToProtoSupportedAssociationType = _),
      (l.getValidatedOutgoingMessageAssociationContextInfo = f),
      (l.getValidatedAssociationFieldsFromProto = h),
      (l.validateMessageAssociationInMessageContextInfo = y));
  },
  98,
);
