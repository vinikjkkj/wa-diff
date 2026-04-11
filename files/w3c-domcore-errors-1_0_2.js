__d(
  "w3c-domcore-errors-1.0.2",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var t, n, r;
      function o(e, t) {
        var n;
        ((n = { writable: !1, enumerable: !0, configurable: !1, value: t }),
          (r[e] = n));
      }
      function a() {
        (this.hasOwnProperty("DOMException") || (this.DOMException = l),
          this.hasOwnProperty("DOMError") || (this.DOMError = i));
      }
      function i(e, n) {
        var r;
        ((r = t[e] || {}),
          (this.name = e || this.name || "DOMError"),
          (this.code = r.code || 0),
          (this.message = n || this.message || r.message || this.name));
      }
      function l(e) {
        var n;
        ((n = t[e] || {}),
          (this.code = n.code || 0),
          (this.message = n.message || e),
          (this.name = e));
      }
      ((l.prototype = Object.create(Error.prototype)),
        (t = {
          IndexSizeError: {
            message: "The index is not in the allowed range",
            constantName: "INDEX_SIZE_ERR",
            code: 1,
          },
          HierarchyRequestError: {
            message: "The operation would yield an incorrect node tree.",
            constantName: "HIERARCHY_REQUEST_ERR",
            code: 3,
          },
          WrongDocumentError: {
            message: "The object is in the wrong document.",
            constantName: "WRONG_DOCUMENT_ERR",
            code: 4,
          },
          InvalidCharacterError: {
            message: "The string contains invalid characters.",
            constantName: "INVALID_CHARACTER_ERR",
            code: 5,
          },
          NoModificationAllowedError: {
            message: "The object can not be modified.",
            constantName: "NO_MODIFICATION_ALLOWED_ERR",
            code: 7,
          },
          NotFoundError: {
            message: "The object can not be found here.",
            constantName: "NOT_FOUND_ERR",
            code: 8,
          },
          NotSupportedError: {
            message: "The operation is not supported.",
            constantName: "NOT_SUPPORTED_ERR",
            code: 9,
          },
          InvalidStateError: {
            message: "The object is in an invalid state.",
            constantName: "INVALID_STATE_ERR",
            code: 11,
          },
          SyntaxError: {
            message: "The string did not match the expected pattern",
            constantName: "SYNTAX_ERR",
            code: 12,
          },
          InvalidModificationError: {
            message: "The object can not be modified in this way",
            constantName: "INVALID_MODIFICATION_ERR",
            code: 13,
          },
          NamespaceError: {
            message: "The operation is not allowed by Namespaces in XML.",
            constantName: "NAMESPACE_ERR",
            code: 14,
          },
          InvalidAccessError: {
            message: "The object does not support the operation or argument.",
            constantName: "INVALID_ACCESS_ERR",
            code: 15,
          },
          SecurityError: {
            message: "The operation is insecure.",
            constantName: "SECURITY_ERR",
            code: 18,
          },
          NetworkError: {
            message: "A network error occurred.",
            constantName: "NETWORK_ERR",
            code: 19,
          },
          AbortError: {
            message: "The operation was aborted.",
            constantName: "ABORT_ERR",
            code: 20,
          },
          URLMismatchError: {
            message: "The given URL does not match another URL.",
            constantName: "URL_MISMATCH_ERR",
            code: 21,
          },
          QuotaExceededError: {
            message: "The quota has been exceeded.",
            constantName: "QUOTA_EXCEEDED_ERR",
            code: 22,
          },
          TimeoutError: {
            message: "The operation timed out.",
            constantName: "TIMEOUT_ERR",
            code: 23,
          },
          InvalidNodeTypeError: {
            message:
              "The supplied node is incorrect or has an incorrect ancestor for this operation.",
            constantName: "INVALID_NODE_TYPE_ERR",
            code: 24,
          },
          DataCloneError: {
            message: "The object can not be cloned.",
            constantName: "DATA_CLONE_ERR",
            code: 25,
          },
          EncodingError: {
            message:
              "The encoding operation (either encoded or decoding) failed.",
          },
        }),
        (n = [
          "",
          "INDEX_SIZE_ERR",
          "DOMSTRING_SIZE_ERR",
          "HIERARCHY_REQUEST_ERR",
          "WRONG_DOCUMENT_ERR",
          "INVALID_CHARACTER_ERR",
          "NO_DATA_ALLOWED_ERR",
          "NO_MODIFICATION_ALLOWED_ERR",
          "NOT_FOUND_ERR",
          "NOT_SUPPORTED_ERR",
          "INUSE_ATTRIBUTE_ERR",
          "INVALID_STATE_ERR",
          "SYNTAX_ERR",
          "INVALID_MODIFICATION_ERR",
          "NAMESPACE_ERR",
          "INVALID_ACCESS_ERR",
          "VALIDATION_ERR",
          "TYPE_MISMATCH_ERR",
          "SECURITY_ERR",
          "NETWORK_ERR",
          "ABORT_ERR",
          "URL_MISMATCH_ERR",
          "QUOTA_EXCEEDED_ERR",
          "TIMEOUT_ERR",
          "INVALID_NODE_TYPE_ERR",
          "DATA_CLONE_ERR",
        ]),
        (r = {}),
        n.forEach(o),
        Object.defineProperties(l, r),
        Object.defineProperties(l.prototype, r),
        (e.DOMException = l),
        (e.DOMError = i),
        (e.Polyfill = a));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
