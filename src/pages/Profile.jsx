function Profile() {
  return (
    <>
      <section>

<div>

  <form>
    <h2>Profile Details</h2>

<label>
  <input type="file" id="avatar" accept=".png, .jpeg, .jpg" hidden />
  <image src={avatar} alt="profile avatar" className=""/>
  Upload new photo
</label>

<input type="text" placeholder="Name" required/>
<textarea placeholder="Bio" required></textarea>
<button type="submit">Save Changes</button>
  </form>
</div>



      </section>
    </>
  );
}

export default Profile;
