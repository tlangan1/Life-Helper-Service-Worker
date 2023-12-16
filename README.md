# [Beginners guide to Web Push Notifications using Service Workers](https://medium.com/@a7ul/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)

## Notes:

1. This project is based on the code found in the title link.
1. To generate the VAPID keys as documented in this link first globally install `web-push` using the following command
   ```
   npm i -g web-push
   ```
1. Next execute the following command.

   ```
   web-push generate-vapid-keys
   ```

   which resulted in the following:

   ```
   =======================================
   Public Key:
   BExD80_HkFrtVmffpbNP-KzVCoL6Y1m7sTvP6Ai7vCGZsn-XDsjwCEbG5Hz0sE0K3_crP6-1Jqdw2a-tjHKEqHk

   Private Key:
   SNas0P12bbdAoIzM0MVkGgSouX79t2TRmYihVSpSD4Q
   =======================================
   ```
