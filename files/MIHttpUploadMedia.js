__d(
  "MIHttpUploadMedia",
  [
    "FBLogger",
    "MAWRotateDTSG",
    "MIMediaUploadAuth",
    "WADirectPath",
    "WAResultOrError",
    "err",
    "fetch",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      if (e.status < 400) return null;
      try {
        var t,
          n,
          r = await e.json();
        return {
          retriable:
            r == null || (t = r.debug_info) == null ? void 0 : t.retriable,
          type: r == null || (n = r.debug_info) == null ? void 0 : n.type,
        };
      } catch (e) {
        return null;
      }
    }
    async function s(e, t, n) {
      var a = n.entityLength,
        i = n.entityName,
        l = n.mediaType,
        s = n.offset,
        u = e + "&" + o("MIMediaUploadAuth").buildMIAuthQueryString();
      try {
        var c = await r("fetch")(u, {
          body: new Blob([t]),
          cache: "no-store",
          credentials: "include",
          headers: {
            "Content-Type": "application/octet-stream",
            Offset: String(s),
            "X-Entity-Length": String(a),
            "X-Entity-Name": i,
            "X-Entity-Type": "application/octet-stream",
            desired_upload_handler: "encrypted_backups",
            media_type: l,
          },
          method: "POST",
          mode: "cors",
        });
        return (
          r("FBLogger")("mi_upload").info(
            "MIHttpUploadMedia: HTTP status %s",
            c.status,
          ),
          c
        );
      } catch (e) {
        throw (
          r("FBLogger")("mi_upload")
            .catching(r("getErrorSafe")(e))
            .mustfix("fail to initiate fetch"),
          e
        );
      }
    }
    async function u(t, n, a, i) {
      var l,
        u = await s(t, n, a),
        c = await e(u);
      if (
        u.status === 400 &&
        ((l = c) == null ? void 0 : l.type) === "NotAuthorizedError"
      ) {
        (r("FBLogger")("mi_upload").info(
          "MIHttpUploadMedia: NotAuthorizedError, rotating DTSG",
        ),
          i == null ||
            i.addAnnotations({
              bool: { mi_upload_dtsg_rotation_attempted: !0 },
            }));
        try {
          (await o("MAWRotateDTSG").tryRotateDTSG()) &&
            ((u = await s(t, n, a)), (c = await e(u)));
        } catch (e) {
          r("FBLogger")("mi_upload")
            .catching(r("getErrorSafe")(e))
            .mustfix("failed to rotate DTSG");
        }
      }
      if (u.status >= 400) {
        var d,
          m,
          p = (d = c) == null ? void 0 : d.type,
          _ = (m = c) == null ? void 0 : m.retriable,
          f = typeof p == "string" ? p : "unknown",
          g = typeof _ == "boolean" ? String(_) : "unknown";
        (r("FBLogger")("mi_upload").warn(
          "MIHttpUploadMedia: upload failed with HTTP %s, error type: %s, retriable: %s",
          u.status,
          f,
          g,
        ),
          i == null ||
            i.addAnnotations({
              int: { mi_upload_http_status: u.status },
              string: { mi_upload_error_retriable: g, mi_upload_error_type: f },
            }));
      }
      switch (u.status) {
        case 200:
          return u
            .json()
            .then(function (e) {
              var t, n;
              if (!Object.prototype.hasOwnProperty.call(e, "direct_path"))
                throw r("err")(
                  "direct_path not available in MI upload response",
                );
              if (typeof e.direct_path != "string")
                throw r("err")(
                  'directPath: "' + e.direct_path + '" is not a string',
                );
              if (e.object_id && typeof e.object_id != "string")
                throw r("err")(
                  'objectId: "' + e.object_id + '" is not a string',
                );
              if (e.handle && typeof e.handle != "string")
                throw r("err")('handle: "' + e.handle + '" is not a string');
              var a = (t = e.server_timing) == null ? void 0 : t.handler_ms;
              typeof a == "number" &&
                (i == null ||
                  i.addAnnotations({
                    int: { mi_upload_server_handler_ms: a },
                  }));
              var l =
                (n = e.server_timing) == null
                  ? void 0
                  : n.since_upload_start_ms;
              typeof l == "number" &&
                (i == null ||
                  i.addAnnotations({
                    int: { mi_upload_server_since_start_ms: l },
                  }));
              var s = {
                directPath: o("WADirectPath").unsafeCastToDirectPath(
                  e.direct_path,
                ),
                handle: e.handle,
                objectId: e.object_id,
              };
              return o("WAResultOrError").makeResult(s);
            })
            .catch(function (e) {
              return (
                r("FBLogger")("mi_upload")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("fail to parse response body"),
                o("WAResultOrError").makeError("body-network-error")
              );
            });
        case 408:
          return o("WAResultOrError").makeError("server-timeout");
        case 413:
          return o("WAResultOrError").makeError("payload-too-large");
        case 415:
          return o("WAResultOrError").makeError("invalid-media");
        case 429:
        case 507:
          return o("WAResultOrError").makeError("upload-throttled");
        default:
          return u.status >= 400 && u.status < 500
            ? o("WAResultOrError").makeError("request-error")
            : o("WAResultOrError").makeError("unspecified-http-error");
      }
    }
    l.miHttpUploadMedia = u;
  },
  98,
);
