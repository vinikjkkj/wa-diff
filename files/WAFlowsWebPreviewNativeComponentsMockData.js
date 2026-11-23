__d(
  "WAFlowsWebPreviewNativeComponentsMockData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n, r) {
        return {
          collection_id: t,
          failed_state: null,
          media_id: n,
          success_state: {
            cdn_url: "EXAMPLE_DATA__CDN_URL_WILL_COME_IN_THIS_FIELD",
            direct_path: "EXAMPLE_DATA__DIRECT_PATH",
            encryption_metadata: {
              enc_key: "XXX",
              encrypted_hash_with_truncated_hmac: "XXX",
              hmac: "XXX",
              hmac_key: "XXX",
              iv: "XXX",
              media_key: "XXX",
              media_key_timestamp: 123,
              media_type: "image",
              plaintext_hash: "XXX",
            },
            mime_type: "EXAMPLE_DATA__MIME_TYPE",
            uploaded_file_size_bytes: r,
          },
          upload_state: null,
        };
      },
      l = function (t, n, r, o, a) {
        return {
          collection_id: n,
          media_id: t,
          media_metadata: {
            file_size_bytes: o,
            media_name: r,
            preview_img_base64: a,
          },
        };
      },
      s = function (t, n, r, o, a) {
        return {
          collection_id: n,
          media_id: t,
          media_metadata: {
            doc_page_count: a != null ? a : void 0,
            file_size_bytes: o,
            media_name: r,
            preview_img_base64: "",
          },
        };
      },
      u = [
        "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",
      ];
    ((i.createMockedDataUploadSuccessState = e),
      (i.createMockDataForPhotoUpload = l),
      (i.createMockDataForDocumentUpload = s),
      (i.UploadedMediaThumbnailPreviewData = u));
  },
  66,
);
