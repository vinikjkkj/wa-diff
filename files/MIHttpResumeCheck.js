__d(
  "MIHttpResumeCheck",
  [
    "FBLogger",
    "MIHandleResumeCheckResponse",
    "MIMediaUploadAuth",
    "fetch",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e + "&" + o("MIMediaUploadAuth").buildMIAuthQueryString();
      try {
        var n = await r("fetch")(t, {
          cache: "no-cache",
          credentials: "include",
          headers: { resume: "1" },
          method: "GET",
          mode: "cors",
        });
        return (
          r("FBLogger")("mi_upload").info(
            "MIHttpResumeCheck: response status %s",
            n.status,
          ),
          o("MIHandleResumeCheckResponse").handleMIResumeCheckResponse(n)
        );
      } catch (e) {
        throw (
          r("FBLogger")("mi_upload")
            .catching(r("getErrorSafe")(e))
            .mustfix("MIHttpResumeCheck: fail to initiate fetch"),
          e
        );
      }
    }
    l.miHttpResumeCheck = e;
  },
  98,
);
