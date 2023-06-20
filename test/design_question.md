# Design : A CLI version of a Discord server

## Intro
A server is just like a group where people can join and communicate in various channels to maintain relevancy of the discussion

## Users

- Admin  (who owns the server)
- Mod    (who overlooks the sanity of the server)
- Member (who posts content on the server)

## Roles

- Admin : View the entire history of a message. Add/remove users,messages etc
- Mod : Can view iterations of a message by the users. Flag any message as inappropriate etc
- Member : Can post messages,edit them or delete them

## Example of the CLI commands

- admin delete \<msgID\> : Deletes a particular message (Can add authentication)
- admin/mod view : show all messages(all versions if edited) posted in the server with (Can add other parameters to show latest 'N' messages)
- mod flag \<msgID\> : Flags a particular message and members should see '**********' in place of the actual message
- member add "text" : adds a message to the server
- member edit \<msgID\> "new text" : replaces the original message (Can add authentication)
- member view : show all messages (only latest version if edited) posted in the server
- member view_self : show all messages (all versions if edited) posted by that user

## Challenges in implementing

- Role based access in viewing/editing the messages
- Tracking the history of the messages
- Storing the messages in a sequential manner

### To increase complexity the concept of multiple servers, multiple threads under a single server can also be added.
