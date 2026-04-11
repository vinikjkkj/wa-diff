__d(
  "useWAWebGalaxyFlowAttachMediaListener",
  [
    "SecurePostMessage",
    "WABase64",
    "WACryptoHmac",
    "WAWebCryptoCreateMediaKeys",
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { FILE_SIZE_LIMIT_EXCEEDED: 1e3 };
    function s() {
      o("useWAWebListener").useListener(
        o("WAWebGalaxyFlowMediaEditorCollection")
          .GalaxyFlowMediaEditorCollection,
        "mediaStageChanged",
        u,
      );
    }
    function u(e) {
      var t = e.collectionId,
        n = e.maxFileSizeBytes,
        a = e.mediaId,
        i = e.stage,
        l = document.getElementById(
          o("WAWebGalaxyFlowsDrawerUtils").FLOWS_IFRAME_ID,
        );
      if (!(!(l instanceof HTMLIFrameElement) || !l.contentWindow)) {
        var s = o(
            "WAWebGalaxyFlowMediaEditorCollection",
          ).GalaxyFlowMediaEditorCollection.getMsgs(t),
          u = s.find(function (e) {
            return e.id === a;
          });
        u &&
          C(t, u, i, n).then(function (e) {
            if (e) {
              var t = e.data,
                n = e.eventName;
              r("SecurePostMessage").sendMessageToSpecificOrigin(
                l.contentWindow,
                JSON.stringify({ eventName: n, payload: t }),
                o("WAWebGalaxyFlowsDrawerUtils").FLOWS_URL,
              );
            }
          });
      }
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l = yield o("WACryptoHmac").hmacSha256(t.macKey, t.iv, 10),
            s = l != null ? o("WABase64").encodeB64(l) : "";
          return {
            hmac: s,
            plaintext_hash: (n = e.mediaData.filehash) != null ? n : "",
            encrypted_hash_with_truncated_hmac:
              (r = e.encFilehash) != null ? r : "",
            media_key: (a = e.mediaKey) != null ? a : "",
            media_key_timestamp: (i = e.mediaKeyTimestamp) != null ? i : 0,
            media_type: e.type,
            enc_key: o("WABase64").encodeB64(t.encKey),
            hmac_key: o("WABase64").encodeB64(t.macKey),
            iv: o("WABase64").encodeB64(t.iv),
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebMmsMediaTypes").getMsgMediaType(t),
            a = t.mediaKey;
          if (a == null) return null;
          var i = yield r("WAWebCryptoCreateMediaKeys")(n, a),
            l = yield c(t, i),
            s = {
              collection_id: e,
              media_id: t.id.id,
              upload_state: null,
              failed_state: null,
              success_state: {
                cdn_url: t.deprecatedMms3Url,
                direct_path: t.directPath,
                uploaded_file_size_bytes: t.size,
                mime_type: t.mimetype,
                encryption_metadata: l,
              },
            };
          return { eventName: "media_picker:status", data: s };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      (n === void 0 && (n = !1), r === void 0 && (r = 0));
      var o = {
        collection_id: e,
        media_id: t.id.id,
        upload_state: null,
        failed_state: { is_retryable: n, error_code: r },
        success_state: null,
      };
      return { eventName: "media_picker:status", data: o };
    }
    function f(e, t) {
      var n,
        o = t.mimetype.split("/")[1],
        a = r("isStringNullOrEmpty")(t.mediaData.filename)
          ? t.id.id + "." + o
          : t.mediaData.filename,
        i = {
          collection_id: e,
          media_id: t.id.id,
          media_metadata: {
            file_size_bytes: t.mediaData.size,
            media_name: a,
            preview_img_base64: (n = t.body) != null ? n : "",
          },
        };
      return { eventName: "media_picker:add", data: i };
    }
    function g(e, t) {
      var n =
          t.mediaData.loadedSize != null &&
          t.mediaData.size != null &&
          t.mediaData.size > 0
            ? Math.floor((t.mediaData.loadedSize / t.mediaData.size) * 100)
            : void 0,
        r = {
          collection_id: e,
          media_id: t.id.id,
          upload_state: n != null ? { progress: n } : null,
          failed_state: null,
          success_state: null,
        };
      return { eventName: "media_picker:status", data: r };
    }
    function h(e, t) {
      return (
        e === o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD ||
        e === o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD ||
        o("WAWebMsgGetters").getIsFailed(t)
      );
    }
    function y(e) {
      return (
        e === o("WAWebMediaTypes").MediaDataStage.PREPARING ||
        e === o("WAWebMediaTypes").MediaDataStage.RESOLVED
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            return n.deprecatedMms3Url
              ? n.mediaData.size > a
                ? _(t, n, !1, e.FILE_SIZE_LIMIT_EXCEEDED)
                : m(t, n)
              : h(r, n)
                ? _(t, n, !0)
                : y(r)
                  ? f(t, n)
                  : r === o("WAWebMediaTypes").MediaDataStage.UPLOADING
                    ? g(t, n)
                    : null;
          },
        )),
        b.apply(this, arguments)
      );
    }
    l.useWAWebGalaxyFlowAttachMediaListener = s;
  },
  98,
);
