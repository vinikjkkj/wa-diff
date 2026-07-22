__d(
  "WAWebWindowsHybridBridge.v2629",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2629",
    "WAWebWindowsHybridBridgeAbProps.v2629",
    "WAWebWindowsHybridBridgeAdv.v2629",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2629",
    "WAWebWindowsHybridBridgeConnection.v2629",
    "WAWebWindowsHybridBridgeContacts.v2629",
    "WAWebWindowsHybridBridgeDebugFeatures.v2629",
    "WAWebWindowsHybridBridgeLinksPreview.v2629",
    "WAWebWindowsHybridBridgeMediaFiles.v2629",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2629",
    "WAWebWindowsHybridBridgeMetaConfig.v2629",
    "WAWebWindowsHybridBridgeNativeAppState.v2629",
    "WAWebWindowsHybridBridgeOds.v2629",
    "WAWebWindowsHybridBridgePictures.v2629",
    "WAWebWindowsHybridBridgePreferences.v2629",
    "WAWebWindowsHybridBridgeRateTheApp.v2629",
    "WAWebWindowsHybridBridgeRingtone.v2629",
    "WAWebWindowsHybridBridgeScalingControl.v2629",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2629",
    "WAWebWindowsHybridBridgeSharesheet.v2629",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2629",
    "WAWebWindowsHybridBridgeTouchpadFix.v2629",
    "WAWebWindowsHybridBridgeVoip.v2629",
    "WAWebWindowsHybridBridgeWam.v2629",
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
            "WAWebWindowsHybridBridgeAbProps.v2629",
          ).WindowsHybridBridgeAbProps_v2629)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2629",
          ).WindowsHybridBridgeWam_v2629)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2629",
          ).WindowsHybridBridgePreferences_v2629)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2629",
          ).WindowsHybridBridgeScalingControl_v2629)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2629",
          ).WindowsHybridBridgeOds_v2629)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2629",
          ).WindowsHybridBridgePictures_v2629)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2629",
            ).WindowsHybridBridgeDebugFeatures_v2629)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2629",
          ).VoipWinRTBridge_v2629)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2629",
          ).WAWebWindowsHybridBridgeRateTheApp_v2629)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2629",
          ).WindowsHybridBridgeConnection_v2629)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2629",
          ).WindowsHybridBridgeTouchpadFix_v2629)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2629",
          ).WindowsHybridBridgeLinksPreview_v2629)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2629",
            ).WindowsHybridBridgeContacts_v2629)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2629",
            ).WindowsHybridBridgeContacts_v2629)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2629",
          ).WAWebWindowsHybridBridgeMediaFiles_v2629)(h));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2629",
          ).WAWebWindowsHybridBridgeSharesheet_v2629)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2629",
          ).WindowsHybridAppActivationBridge_v2629)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2629",
          ).WindowsHybridBridgeNativeAppState_v2629)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2629",
          ).WindowsHybridBridgeSystemIntegrations_v2629)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2629",
          ).WindowsHybridBridgeBrowserExtensions_v2629)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2629",
          ).WindowsHybridBridgeSeamlessMigration_v2629)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2629",
          ).WindowsHybridBridgeMediaTranscoder_v2629)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2629",
          ).WindowsHybridBridgeAdv_v2629)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2629",
          ).WindowsHybridBridgeRingtone_v2629)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2629",
          ).WindowsHybridBridgeMetaConfig_v2629)(I)),
          this.metaConfig.initialize()),
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
    l.WindowsHybridBridge_v2629 = e;
  },
  98,
);
