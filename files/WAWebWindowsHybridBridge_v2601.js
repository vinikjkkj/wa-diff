__d(
  "WAWebWindowsHybridBridge.v2601",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2601",
    "WAWebWindowsHybridBridgeAbProps.v2601",
    "WAWebWindowsHybridBridgeAdv.v2601",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2601",
    "WAWebWindowsHybridBridgeConnection.v2601",
    "WAWebWindowsHybridBridgeContacts.v2601",
    "WAWebWindowsHybridBridgeDebugFeatures.v2601",
    "WAWebWindowsHybridBridgeLinksPreview.v2601",
    "WAWebWindowsHybridBridgeMediaFiles.v2601",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2601",
    "WAWebWindowsHybridBridgeNativeAppState.v2601",
    "WAWebWindowsHybridBridgePictures.v2601",
    "WAWebWindowsHybridBridgePreferences.v2601",
    "WAWebWindowsHybridBridgeRateTheApp.v2601",
    "WAWebWindowsHybridBridgeScalingControl.v2601",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2601",
    "WAWebWindowsHybridBridgeSharesheet.v2601",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2601",
    "WAWebWindowsHybridBridgeTouchpadFix.v2601",
    "WAWebWindowsHybridBridgeVoip.v2601",
    "WAWebWindowsHybridBridgeWam.v2601",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2601",
          ).WindowsHybridBridgeAbProps_v2601)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2601",
          ).WindowsHybridBridgeWam_v2601)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2601",
          ).WindowsHybridBridgePreferences_v2601)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2601",
          ).WindowsHybridBridgeScalingControl_v2601)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2601",
          ).WindowsHybridBridgePictures_v2601)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2601",
            ).WindowsHybridBridgeDebugFeatures_v2601)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2601",
          ).VoipWinRTBridge_v2601)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2601",
          ).WAWebWindowsHybridBridgeRateTheApp_v2601)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2601",
          ).WindowsHybridBridgeConnection_v2601)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2601",
          ).WindowsHybridBridgeTouchpadFix_v2601)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2601",
          ).WindowsHybridBridgeLinksPreview_v2601)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2601",
            ).WindowsHybridBridgeContacts_v2601)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2601",
            ).WindowsHybridBridgeContacts_v2601)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2601",
          ).WAWebWindowsHybridBridgeMediaFiles_v2601)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2601",
          ).WAWebWindowsHybridBridgeSharesheet_v2601)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2601",
          ).WindowsHybridAppActivationBridge_v2601)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2601",
          ).WindowsHybridBridgeNativeAppState_v2601)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2601",
          ).WindowsHybridBridgeSystemIntegrations_v2601)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2601",
          ).WindowsHybridBridgeBrowserExtensions_v2601)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2601",
          ).WindowsHybridBridgeSeamlessMigration_v2601)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2601",
          ).WindowsHybridBridgeMediaTranscoder_v2601)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2601",
          ).WindowsHybridBridgeAdv_v2601)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2601 = e;
  },
  98,
);
