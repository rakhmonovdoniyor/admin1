<form > 
<Input
  type="text"
  name="name"
  value={data.name}
  onChange={handleChange}
  placeholder="Name"
/>
<Input
  type="text"
  name="brand"
  value={data.brand}
  onChange={handleChange}
  placeholder="Brand"
/>
<Input
  type="text"
  name="company"
  value={data.company}
  onChange={handleChange}
  placeholder="Company"
/>
<Input
  type="text"
  name="location"
  value={data.location}
  onChange={handleChange}
  placeholder="Location"
/>
<Input
  type="number"
  name="cost"
  value={data.cost}
  onChange={handleChange}
  placeholder="Cost"
/>
<Input
  type="text"
  name="type"
  value={data.type}
  onChange={handleChange}
  placeholder="Type"
/>
<Input
  type="date"
  name="date"
  value={data.date}
  onChange={handleChange}
  placeholder="Date"
/>
<Input
  type="number"
  name="people"
  value={data.people}
  onChange={handleChange}
  placeholder="People"
/>


<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
  <Button onClick={() => handleEdit(value.name)}>Save</Button>
  <Button onClick={handleClose} variant="plain">Cancel</Button>
</Box>
</form>