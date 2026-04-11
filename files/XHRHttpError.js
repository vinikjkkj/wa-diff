__d(
  "XHRHttpError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "HTTP_CLIENT_ERROR",
      l = "HTTP_PROXY_ERROR",
      s = "HTTP_SERVER_ERROR",
      u = "HTTP_TRANSPORT_ERROR",
      c = "HTTP_UNKNOWN_ERROR";
    function d(t, n) {
      if (n === 0) {
        var r = t.getProtocol();
        return r === "file" || r === "ftp" ? null : u;
      } else
        return n >= 100 && n < 200
          ? l
          : n >= 200 && n < 300
            ? null
            : n >= 400 && n < 500
              ? e
              : n >= 500 && n < 600
                ? s
                : n >= 12001 && n < 12156
                  ? u
                  : c;
    }
    ((i.HTTP_CLIENT_ERROR = e),
      (i.HTTP_PROXY_ERROR = l),
      (i.HTTP_SERVER_ERROR = s),
      (i.HTTP_TRANSPORT_ERROR = u),
      (i.HTTP_UNKNOWN_ERROR = c),
      (i.getErrorCode = d));
  },
  66,
);
